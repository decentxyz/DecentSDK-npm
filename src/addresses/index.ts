import mainnet from './1-mainnet.json';
import goerli from './5-goerli.json';
import rinkeby from './4-rinkeby.json';
import polygon from './137-polygon.json';
import polygonMumbai from './80001-polygonMumbai.json';
import optimism from './10-optimism.json';
import optimismGoerli from './420-optimismGoerli.json';
import arbitrum from './42161-arbitrum.json';
import arbitrumGoerli from './421613-arbitrumGoerli.json';
import hardhat from './31337-hardhat.json';

export type Addresses = {
  DCNTSDK: string;
  DCNT721A: string;
  DCNT4907A: string;
  DCNTCrescendo: string;
  DCNTVault: string;
  DCNTStaking: string;
  DCNTMetadataRenderer: string;
  DCNTRegistry: string;
  DCNTVaultNFT: string;
  SplitMain: string;
}

export const addresses = {
  mainnet,
  goerli,
  rinkeby,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  hardhat,
}
