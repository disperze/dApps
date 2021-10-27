import { Loading, PageLayout } from "@cosmicdapp/design";
import { getErrorFromStackTrace, printableBalance, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Typography } from "antd";
import { Row, Col, Button } from 'antd';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AccountMenu } from "../../components/AccountMenu";
import { pathValidators, pathAllRewards, pathOperationResult } from "../../paths";
import { BorderContainer, MainStack, MenuHeader, ValidatorStack } from "./style";
import { QueryDelegationRewardsResponse } from "@cosmjs/stargate/build/codec/cosmos/distribution/v1beta1/query";
import { QueryValidatorResponse } from "@cosmjs/stargate/build/codec/cosmos/staking/v1beta1/query";
import { coins, defaultGasLimits as defaultStargateGasLimits, isBroadcastTxFailure } from "@cosmjs/stargate";
import { MsgWithdrawDelegatorReward } from "@cosmjs/stargate/build/codec/cosmos/distribution/v1beta1/tx";

const { Title, Text } = Typography;

interface ValidatorData {
  readonly name: string;
  readonly address: string;
  readonly rewards: string;
  readonly status: number;
}

interface UnbondData {
  readonly name: string;
  readonly address: string;
  readonly balance: string;
  readonly complete: Date;
}

export function AllRewards(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [hasRewards, setRewards] = useState(false);
  const history = useHistory();
  const { address, config, getStakingClient, getClient, refreshBalance } = useSdk();
  const [validatorsData, setValidatorsData] = useState<readonly ValidatorData[]>([]);
  const [unbondData, setUnbondDate] = useState<readonly UnbondData[]>([]);

  useEffect(() => {
    (async function updateUnbonding() {
      const client = getStakingClient();
      const result = await client.staking.delegatorUnbondingDelegations(address);

      let validatorsPromise: Promise<QueryValidatorResponse>[] = [];
      result.unbondingResponses.forEach(unbonding => {
        validatorsPromise.push(client.staking.validator(unbonding.validatorAddress));
      });

      const validators = await Promise.all(validatorsPromise)

      let unbondData: UnbondData[] = [];
      result.unbondingResponses.forEach(unbonding => {
        const validator = validators.find(v => v.validator.operatorAddress === unbonding.validatorAddress);
        const entries = unbonding.entries.map(entry => ({
          name: validator.validator.description.moniker,
          address: unbonding.validatorAddress,
          balance: entry.balance,
          complete: entry.completionTime,
        }));

        unbondData.push(...entries);
      });

      setUnbondDate(unbondData);
    })();
  }, [getStakingClient, address]);

  useEffect(() => {
    (async function updateValidatorsData() {
      const client = getStakingClient();
      const result = await client.distribution.delegatorValidators(address);

      let validatorsPromise: Promise<QueryValidatorResponse>[] = [];
      let rewardsPromise: Promise<QueryDelegationRewardsResponse>[] = [];
      result.validators.forEach(valAddress => {
        validatorsPromise.push(client.staking.validator(valAddress));
        rewardsPromise.push(client.distribution.delegationRewards(address, valAddress));
      });

      const validators = await Promise.all(validatorsPromise)
      const rewards = await Promise.all(rewardsPromise);

      const validatorsData: readonly ValidatorData[] = validators
        .map((item, idx) => {
          const reward = rewards[idx].rewards;

          return {
            name: item.validator.description.moniker,
            address: item.validator.operatorAddress,
            status: item.validator.status,
            rewards: reward.length > 0 ? Decimal.fromAtomics(reward[0].amount?.slice(0, -18), 6).toString() : ""
          };
      })
      .filter(item => item.status === 3 || item.rewards);

      setRewards(validatorsData.some(item => item.rewards !== ""))
      setValidatorsData(validatorsData);
    })();
  }, [getStakingClient, address]);

  function goToValidator(address: string) {
    history.push(`${pathValidators}/${address}`);
  }

  function getTimeLeft(data: Date) {
    const now = new Date();
    const diff = data.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days > 0) {
      return days + "days";
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    return hours + "hours";
  }

  async function withdrawRewards() {
    if (validatorsData.length === 0) return;
    setLoading(true);

    try {
      let msgs = validatorsData
        .filter(val => val.rewards !== "")
        .map(validator => ({
          typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
          value: MsgWithdrawDelegatorReward.fromPartial({
            delegatorAddress: address,
            validatorAddress: validator.address
        })
      }));

      const fee = {
        amount: coins(
          config.gasPrice * 10 ** config.coinMap[config.feeToken].fractionalDigits,
          config.feeToken,
        ),
        gas: (msgs.length * defaultStargateGasLimits.withdraw).toString(),
      };

      const response = await getClient().signAndBroadcast(address, msgs, fee);
      if (isBroadcastTxFailure(response)) {
        throw Error("Rewards withdrawal failed");
      }

      refreshBalance();

      history.push({
        pathname: pathOperationResult,
        state: {
          success: true,
          message: `Successfully withdrawn`,
          customButtonText: "My Rewards",
          customButtonActionPath: `${pathAllRewards}`,
        },
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Rewards withdrawal transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathAllRewards}`,
        },
      });
    }
  }

  return (
    (loading && <Loading loadingText={`Withdrawing rewards...`} />) ||
    (!loading && (
    <PageLayout>
      <MainStack>
        <MenuHeader>
          <span></span>
          <AccountMenu />
        </MenuHeader>
        <Title>My Rewards</Title>
        <ValidatorStack>
          <Row style={{marginBottom: "1.5rem"}}>
            <Col span={16} style={{ textAlign: "left" }}>
              <Text>Validator</Text>
            </Col>
            <Col span={8} style={{ textAlign: "right" }}>
              <Text>Reward</Text>
            </Col>
          </Row>
          {validatorsData.map((validator) => (
            <BorderContainer key={validator.name}>
              <Row onClick={() => goToValidator(validator.address)}>
                <Col span={16} style={{textAlign: "left"}}>
                  <Text>{validator.name}</Text>
                </Col>
                <Col span={8} style={{ textAlign: "right" }}>
                  <Text>{validator.rewards}</Text>
                </Col>
              </Row>
            </BorderContainer>
          ))}
        </ValidatorStack>
        <Button type="primary" disabled={!hasRewards} onClick={withdrawRewards}>
          Withdraw all rewards
        </Button>
        {unbondData.length === 0 ? <></> : <>
        <Title>Unbonding</Title>
        <ValidatorStack>
          <Row style={{marginBottom: "1.5rem"}}>
            <Col span={16} style={{ textAlign: "left" }}>
              <Text>Validator</Text>
            </Col>
            <Col span={8} style={{ textAlign: "right" }}>
              <Text>Time left</Text>
            </Col>
          </Row>
          {unbondData.map((unbond) => (
            <BorderContainer key={unbond.name}>
              <Row onClick={() => goToValidator(unbond.address)}>
                <Col span={16} style={{textAlign: "left"}}>
                  <Text>{unbond.name} [{printableBalance([{amount: unbond.balance, denom: config.stakingToken}])}]</Text>
                </Col>
                <Col span={8} style={{ textAlign: "right" }}>
                  <Text>{getTimeLeft(unbond.complete)}</Text>
                </Col>
              </Row>
            </BorderContainer>
          ))}
        </ValidatorStack>
        </>}
      </MainStack>
    </PageLayout>
    ))
  );
}
