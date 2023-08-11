import mainnet from './1-mainnet.json';
import goerli from './5-goerli.json';
import sepolia from './11155111-sepolia.json';
import polygon from './137-polygon.json';
import polygonMumbai from './80001-polygonMumbai.json';
import optimism from './10-optimism.json';
import optimismGoerli from './420-optimismGoerli.json';
import arbitrum from './42161-arbitrum.json';
import arbitrumGoerli from './421613-arbitrumGoerli.json';
import base from './8453-base.json';
import baseGoerli from './84531-baseGoerli.json';
import zora from './7777777-zora.json';
import zoraGoerli from './999-zoraGoerli.json';
import hardhat from './31337-hardhat.json';

export type Addresses = {
  DCNTSDK: string;
  DCNT721A: string;
  DCNT4907A: string;
  DCNTSeries: string;
  DCNTCrescendo: string;
  DCNTVault: string;
  DCNTStaking: string;
  DCNTMetadataRenderer: string;
  DCNTRegistry: string;
  DCNTVaultNFT: string;
  DCNTRentalMarket: string;
}

export const addresses = {
  mainnet,
  goerli,
  sepolia,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  base,
  baseGoerli,
  zora,
  zoraGoerli,
  hardhat,
}
