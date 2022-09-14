import { ethers } from "ethers";
import endpoints from './config/endpoints.json';

export type Chain = {
  network: string;
  endpoint: string;
  id: number;
}

const mainnet: Chain = {
  network: 'mainnet',
  endpoint: endpoints.mainnet,
  id: 1
}

const goerli: Chain = {
  network: 'goerli',
  endpoint: endpoints.goerli,
  id: 5
}

const rinkeby: Chain = {
  network: 'rinkeby',
  endpoint: endpoints.rinkeby,
  id: 4
}

const polygon: Chain = {
  network: 'polygon',
  endpoint: endpoints.polygon,
  id: 137
}

const polygonMumbai: Chain = {
  network: 'polygonMumbai',
  endpoint: endpoints.polygonMumbai,
  id: 80001
}

const optimism: Chain = {
  network: 'optimism',
  endpoint: endpoints.optimism,
  id: 10
}

const optimismGoerli: Chain = {
  network: 'optimismGoerli',
  endpoint: endpoints.optimismGoerli,
  id: 420
}

const arbitrum: Chain = {
  network: 'arbitrum',
  endpoint: endpoints.arbitrum,
  id: 42161
}

const arbitrumGoerli: Chain = {
  network: 'arbitrumGoerli',
  endpoint: endpoints.arbitrumGoerli,
  id: 421613
}

const localhost: Chain = {
  network: 'localhost',
  endpoint: endpoints.localhost,
  id: 0
}

export const chain = {
  mainnet,
  goerli,
  rinkeby,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  localhost
}

export const allChains = [
  mainnet,
  goerli,
  rinkeby,
  polygon,
  polygonMumbai,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  localhost
];

