import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Bip39, Random } from "@cosmjs/crypto";
import { makeCosmoshubPath, } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet, OfflineSigner } from "@cosmjs/proto-signing";
import { LedgerSigner } from "@cosmjs/ledger-amino";
import {
  DistributionExtension,
  QueryClient,
  setupDistributionExtension,
  setupStakingExtension,
  StakingExtension,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { AppConfig } from "../config";

// generateMnemonic will give you a fresh mnemonic
// it is up to the app to store this somewhere
export function generateMnemonic(): string {
  return Bip39.encode(Random.getBytes(16)).toString();
}

// some code that will only work in a browser...
export function loadOrCreateMnemonic(): string {
  const key = "burner-wallet";
  const loaded = localStorage.getItem(key);
  if (loaded) {
    return loaded;
  }
  const generated = generateMnemonic();
  localStorage.setItem(key, generated);
  return generated;
}

export type WalletLoader = (chainId: string, addressPrefix?: string) => Promise<OfflineSigner>;

export async function loadOrCreateWallet(_chainId: string, addressPrefix?: string): Promise<OfflineSigner> {
  const mnemonic = loadOrCreateMnemonic();
  const hdPath = makeCosmoshubPath(0);
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths: [hdPath],
    prefix: addressPrefix
  });
  return wallet;
}

export async function loadLedgerWallet(_chainId: string, addressPrefix?: string): Promise<OfflineSigner> {
  const interactiveTimeout = 120_000;
  const ledgerTransport = await TransportWebUSB.create(interactiveTimeout, interactiveTimeout);

  return new LedgerSigner(ledgerTransport, { hdPaths: [makeCosmoshubPath(0)], prefix: addressPrefix });
}

export async function loadKeplrWallet(chainId: string): Promise<OfflineSigner> {
  const anyWindow: any = window;
  if (!anyWindow.getOfflineSignerAuto) {
    throw new Error("Keplr extension is not available");
  }

  const signer = anyWindow.getOfflineSignerAuto(chainId);
  signer.signAmino = signer.signAmino ?? signer.sign;

  return Promise.resolve(signer);
}

// this creates a new connection to a server at URL,
// using a signing keyring generated from the given mnemonic
export async function createClient(config: AppConfig, signer: OfflineSigner): Promise<SigningCosmWasmClient> {
  return SigningCosmWasmClient.connectWithSigner(config.rpcUrl, signer, {
    prefix: config.addressPrefix,
  });
}

export async function createStakingClient(
  apiUrl: string,
): Promise<QueryClient & StakingExtension & DistributionExtension> {
  const tmClient = await Tendermint34Client.connect(apiUrl);
  return QueryClient.withExtensions(tmClient, setupStakingExtension, setupDistributionExtension);
}
