import { PageLayout } from "@cosmicdapp/design";
import { useSdk } from "@cosmicdapp/logic";
import { Typography } from "antd";
import { Row, Col } from 'antd';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AccountMenu } from "../../components/AccountMenu";
import { pathValidators } from "../../paths";
import { formatCommission } from "../../utils/staking";
import { BorderContainer, MainStack, MenuHeader, ValidatorStack } from "./style";

const { Title, Text } = Typography;

interface ValidatorData {
  readonly name: string;
  readonly address: string;
  readonly commission: string;
}

function validatorCompare(a: ValidatorData, b: ValidatorData) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function validatorCompareCommission(a: ValidatorData, b: ValidatorData) {
  const feeA = parseInt(a.commission);
  const feeB = parseInt(b.commission);

  if (feeA < feeB) {
    return -1;
  }
  if (feeA > feeB) {
    return 1;
  }
  return 0;
}

export function Validators(): JSX.Element {
  const history = useHistory();
  const { getStakingClient } = useSdk();

  const [validatorsData, setValidatorsData] = useState<readonly ValidatorData[]>([]);

  useEffect(() => {
    (async function updateValidatorsData() {
      const { validators } = await getStakingClient().staking.validators("BOND_STATUS_BONDED");
      const validatorsData: readonly ValidatorData[] = validators
        .map((validator) => ({
          name: validator.description.moniker,
          address: validator.operatorAddress,
          commission: validator.commission.commissionRates.rate
        }))
        .sort(validatorCompare);

      setValidatorsData(validatorsData);
    })();
  }, [getStakingClient]);

  function goToValidator(address: string) {
    history.push(`${pathValidators}/${address}`);
  }

  return (
    <PageLayout>
      <MainStack>
        <MenuHeader>
          <span></span>
          <AccountMenu />
        </MenuHeader>
        <Title>Validators</Title>
        <ValidatorStack>
          <Row style={{marginBottom: "1.5rem"}}>
            <Col span={16} style={{ textAlign: "left" }}>
              <Text>Nombre</Text>
            </Col>
            <Col span={8} style={{ textAlign: "right" }}>
              <Text>Commission</Text>
            </Col>
          </Row>
          {validatorsData.map((validator) => (
            <BorderContainer key={validator.name}>
              <Row onClick={() => goToValidator(validator.address)}>
                <Col span={20} style={{textAlign: "left"}}>
                  <Text>{validator.name}</Text>
                </Col>
                <Col span={4}>
                  <Text>{formatCommission(validator.commission)}</Text>
                </Col>
              </Row>
            </BorderContainer>
          ))}
        </ValidatorStack>
      </MainStack>
    </PageLayout>
  );
}
