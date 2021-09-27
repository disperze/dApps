import { useError, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Validator } from "@cosmjs/stargate/build/codec/cosmos/staking/v1beta1/staking";
import { MsgDelegate, MsgUndelegate } from "@cosmjs/stargate/build/codec/cosmos/staking/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "@cosmjs/stargate/build/codec/cosmos/distribution/v1beta1/tx";
import { useEffect, useState } from "react";

export type StakingValidator = Validator;
export interface EncodeObject<T, V> {
  readonly typeUrl: T;
  readonly value: V;
}
export type EncodeMsgDelegate = EncodeObject<
  "/cosmos.staking.v1beta1.MsgDelegate",
  MsgDelegate
>;
export type EncodeMsgUndelegate = EncodeObject<
  "/cosmos.staking.v1beta1.MsgUndelegate",
  MsgUndelegate
>;
export type EncodeMsgWithdrawDelegatorReward = EncodeObject<
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  MsgWithdrawDelegatorReward
>;

export function useStakingValidator(validatorAddress: string): StakingValidator {
  const { setError } = useError();
  const { getStakingClient } = useSdk();
  const [validator, setValidator] = useState<StakingValidator>();

  useEffect(() => {
    (async function updateValidator() {
      try {
        const { validator } = await getStakingClient().staking.validator(validatorAddress);
        setValidator(validator);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    })();
  }, [getStakingClient, validatorAddress, setError]);

  return validator;
}

export function formatShares(shares: string): string {
  return Decimal.fromUserInput(shares, 18).toString();
}

export function formatUpdateTime(updateTime: string): string {
  return new Date(updateTime).toLocaleString(undefined, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
}

export function formatCommission(value: string): string {
  const val = value.slice(0, -16);
  if (!val) return "0 %";

  return `${val} %`;
}
