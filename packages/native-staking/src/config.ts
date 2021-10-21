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
  // TODO make sure it's correct
  codeId: 129,
};

const musselnet: AppConfig = {
  chainId: "musselnet-2",
  chainName: "Musselnet",
  addressPrefix: "wasm",
  rpcUrl: "https://rpc.musselnet.cosmwasm.com",
  httpUrl: "https://lcd.musselnet.cosmwasm.com",
  faucetUrl: "https://faucet.musselnet.cosmwasm.com",
  feeToken: "umayo",
  stakingToken: "ufrites",
  coinMap: {
    umayo: { denom: "MAYO", fractionalDigits: 6 },
    ufrites: { denom: "FRITES", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  codeId: 5,
};

const lucinanet: AppConfig = {
  chainId: "lucina",
  chainName: "Juno testnet",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.juno.giansalex.dev",
  httpUrl: "https://lcd.juno.giansalex.dev",
  faucetUrl: "",
  feeToken: "ujuno",
  stakingToken: "ujuno",
  coinMap: {
    ujuno: { denom: "JUNO", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const heranet: AppConfig = {
  chainId: "hera",
  chainName: "Juno Hera",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.hera.giansalex.dev",
  httpUrl: "https://lcd.hera.giansalex.dev",
  faucetUrl: "",
  feeToken: "ujuno",
  stakingToken: "ujuno",
  coinMap: {
    ujuno: { denom: "JUNO", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};


const juno1: AppConfig = {
  chainId: "juno-1",
  chainName: "Juno",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.juno.disperze.network",
  httpUrl: "https://lcd.juno.disperze.network",
  faucetUrl: "",
  feeToken: "ujuno",
  stakingToken: "ujuno",
  coinMap: {
    ujuno: { denom: "JUNO", fractionalDigits: 6, coingecko: 'juno-network' },
  },
  gasPrice: 0.025,
};

const configs: NetworkConfigs = { local, musselnet, lucinanet, heranet, juno1 };
export const config = getAppConfig(configs);
