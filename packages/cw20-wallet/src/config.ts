import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "testing",
  chainName: "Testing",
  addressPrefix: "wasm",
  rpcUrl: "http://localhost:26659",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000",
  feeToken: "ucosm",
  stakingToken: "uatom",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  codeId: 2,
};

const musselnet: AppConfig = {
  chainId: "oysternet-1",
  chainName: "Oysternet",
  addressPrefix: "wasm",
  rpcUrl: "http://rpc.oysternet.cosmwasm.com",
  httpUrl: "http://lcd.oysternet.cosmwasm.com",
  faucetUrl: "https://faucet.musselnet.cosmwasm.com",
  feeToken: "usponge",
  stakingToken: "usponge",
  coinMap: {
    usponge: { denom: "SPONGE", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  codeId: 3,
};

const uninet: AppConfig = {
  chainId: "uni",
  chainName: "Juno Testnet",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.juno.giansalex.dev",
  httpUrl: "https://lcd.juno.giansalex.dev",
  faucetUrl: "",
  feeToken: "ujunox",
  stakingToken: "ujunox",
  coinMap: {
    ujunox: { denom: "JUNOX", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  codeId: 1,
};

const configs: NetworkConfigs = { local, musselnet, uninet };
export const config = getAppConfig(configs);
