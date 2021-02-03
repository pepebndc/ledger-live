// @flow
import semver from "semver";
import type { AppAndVersion } from "./hw/connectApp";

export const req = {
  method: "POST",
  url: "https://appstore.aws.prd.ldg-tech.com/api/get_apps",
  data: {
    current_se_firmware_final_version: 118,
    device_version: 10,
    provider: 1,
  },
};

export const minAppVersion = {
  Aeternity: "0.4.3",
  Aion: "1.0.2",
  Akroma: "1.4.0",
  Algorand: "1.2.9",
  Ardor: "1.0.1",
  Ark: "2.1.0",
  Atheios: "1.4.0",
  Avalanche: "0.2.1",
  Banano: "1.2.2",
  "Binance Chain": "1.1.7",
  Bitcoin: "1.5.0",
  "Bitcoin Cash": "1.5.0",
  "Bitcoin Gold": "1.5.0",
  "Bitcoin Private": "1.5.0",
  "Bitcoin Test": "1.5.0",
  Callisto: "1.4.0",
  "Cardano ADA": "2.0.4",
  Celo: "1.0.3",
  Cosmos: "2.16.3",
  "Crypto.com Chain": "0.0.0",
  DEXON: "1.4.0",
  Dash: "1.5.0",
  Decred: "1.3.9",
  "Decred Test": "1.3.9",
  Digibyte: "1.5.0",
  Dogecoin: "1.5.0",
  Elastos: "1.1.2",
  Ellaism: "1.4.0",
  Elrond: "1.0.6",
  EnergyWebChain: "1.4.0",
  Eos: "1.3.1",
  "Eth Recovery": "0.0.0",
  "Eth Ropsten": "1.6.0",
  "Ether-1": "1.4.0",
  EtherGem: "1.4.0",
  Ethereum: "1.4.0",
  "Ethereum Classic": "1.4.0",
  Ethersocial: "1.4.0",
  Exchange: "2.0.0",
  Expanse: "1.4.0",
  FIC: "3.0.4",
  Factom: "1.2.3",
  "Fantom FTM": "0.0.0",
  "Fido U2F": "1.2.7",
  Filecoin: "0.18.2",
  Flow: "0.9.1",
  GameCredits: "1.5.0",
  GoChain: "1.4.0",
  Groestlcoin: "1.3.4",
  "Groestlcoin Test": "1.3.4",
  HODL: "0.0.3",
  HPB: "1.4.0",
  Handshake: "1.0.1",
  "Harmony One": "1.0.2",
  Hedera: "1.0.1",
  Helium: "1.0.0",
  Hello: "1.2.0",
  Horizen: "1.5.0",
  Hycon: "0.2.3",
  ICON: "1.0.7",
  "ICON testnet": "1.0.7",
  IOTA: "0.5.3",
  IOV: "2.16.4",
  Insolar: "1.0.0",
  IoTeX: "0.1.6",
  Kin: "0.0.4",
  "Kin (SPL)": "0.0.0",
  Komodo: "1.5.0",
  Kusama: "3.23.0",
  LBRY: "1.5.0",
  Liquid: "1.4.8",
  "Liquid Hless": "1.4.8",
  "Liquid Test": "1.4.8",
  "Liquid Test Hless": "1.4.8",
  Lisk: "1.4.0",
  Litecoin: "1.5.0",
  Mix: "1.4.0",
  Monero: "1.7.4",
  Musicoin: "1.4.0",
  NEAR: "1.1.3",
  NEM: "0.0.1",
  NEO: "1.3.6",
  NIX: "1.5.0",
  NOS: "1.2.2",
  Nano: "1.2.2",
  Nervos: "0.5.0",
  Nimiq: "1.4.4",
  ONT: "1.2.2",
  Oasis: "1.8.1",
  OasisVal: "1.8.1",
  OpenPGP: "1.4.1",
  "OpenPGP.XL": "1.4.1",
  POA: "1.4.0",
  Particl: "1.2.12",
  Passwords: "0.1.0",
  Peercoin: "1.5.0",
  Pirl: "1.4.0",
  PivX: "1.5.0",
  Polkadot: "5.23.0",
  QRL: "1.1.3",
  Qtum: "1.5.0",
  REOSC: "1.4.0",
  RSK: "1.4.0",
  "RSK Test": "1.4.0",
  Ravencoin: "1.5.0",
  "Recovery Check": "1.0.2",
  Resistance: "1.5.0",
  Rise: "1.4.0",
  "SSH/PGP Agent": "0.0.7",
  Sia: "0.4.2",
  Solana: "1.0.1",
  Stacks: "0.0.0",
  Stealth: "1.5.0",
  Stellar: "3.2.2",
  Stratis: "1.5.0",
  Terra: "1.1.0",
  "Tezos Baking": "2.2.9",
  "Tezos Wallet": "2.2.9",
  ThunderCore: "1.4.0",
  TomoChain: "1.4.0",
  Tron: "0.3.2",
  Ubiq: "1.4.0",
  VeChain: "1.0.7",
  Vertcoin: "1.5.0",
  Viacoin: "1.5.0",
  Volta: "1.4.0",
  Wanchain: "1.4.0",
  Waves: "1.1.0",
  Webchain: "1.3.7",
  Woleet: "1.2.4",
  XRP: "2.0.1",
  XSN: "1.5.0",
  ZClassic: "1.5.0",
  Zcash: "1.5.0",
  Zcoin: "1.5.0",
  Zilliqa: "0.4.2",
  kUSD: "1.3.7",
};

export default ({ name, version }: AppAndVersion) =>
  name in minAppVersion &&
  semver.gte(semver.coerce(version), minAppVersion[name]);
