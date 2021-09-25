import { Loading, PageLayout } from "@cosmicdapp/design";
import { displayAmountToNative, getErrorFromStackTrace, useSdk } from "@cosmicdapp/logic";
import { Coin, coins } from "@cosmjs/stargate";
import { isBroadcastTxFailure } from "@cosmjs/stargate";
import { Typography } from "antd";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult, pathUndelegate, pathValidators } from "../../paths";
import { EncodeMsgUndelegate, useStakingValidator } from "../../utils/staking";
import { FormUndelegateBalance, FormUndelegateBalanceFields } from "./FormUndelegateBalance";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

interface UndelegateParams {
  readonly validatorAddress: string;
}

export function Undelegate(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { validatorAddress } = useParams<UndelegateParams>();
  const { getClient, address, refreshBalance } = useSdk();

  const validator = useStakingValidator(validatorAddress);

  async function submitUndelegateBalance({ amount }: FormUndelegateBalanceFields) {
    setLoading(true);
    const nativeAmountString = displayAmountToNative(amount, config.coinMap, config.stakingToken);
    const nativeAmountCoin: Coin = { amount: nativeAmountString, denom: config.stakingToken };

    try {
      const response = await getClient().undelegateTokens(address, validatorAddress, nativeAmountCoin);
      if (isBroadcastTxFailure(response)) {
        throw Error("Undelegate failed");
      }

      refreshBalance();

      history.push({
        pathname: pathOperationResult,
        state: {
          success: true,
          message: `${amount} ${config.coinMap[config.stakingToken].denom} successfully undelegated`,
          customButtonText: "Validator home",
          customButtonActionPath: `${pathValidators}/${validatorAddress}`,
        },
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Undelegate transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathValidators}/${validatorAddress}${pathUndelegate}`,
        },
      });
    }
  }

  return (
    (loading && <Loading loadingText={`Undelegating...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <HeaderTitleStack>
            <HeaderBackMenu path={`${pathValidators}/${validatorAddress}`} />
            <Title>Undelegate</Title>
            <Title level={2}>{validator?.description.moniker ?? ""}</Title>
          </HeaderTitleStack>
          <FormUndelegateBalance
            validatorAddress={validatorAddress}
            submitUndelegateBalance={submitUndelegateBalance}
          />
        </MainStack>
      </PageLayout>
    ))
  );
}
