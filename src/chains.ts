import { ethers } from "ethers";
import endpoints from './config/endpoints.json';

export type Chain = {
  endpoint: string;
  id: number;
}

const mainnet: Chain = {
  endpoint: endpoints.mainnet,
  id: 1
}

const goerli: Chain = {
  endpoint: endpoints.goerli,
  id: 5
}

const rinkeby: Chain = {
  endpoint: endpoints.rinkeby,
  id: 4
}

const polygon: Chain = {
  endpoint: endpoints.polygon,
  id: 137
}

const polygonMumbai: Chain = {
  endpoint: endpoints.polygonMumbai,
  id: 80001
}

const optimism: Chain = {
  endpoint: endpoints.optimism,
  id: 10
}

const optimismGoerli: Chain = {
  endpoint: endpoints.optimismGoerli,
  id: 420
}

const arbitrum: Chain = {
  endpoint: endpoints.arbitrum,
  id: 42161
}

const arbitrumGoerli: Chain = {
  endpoint: endpoints.arbitrumGoerli,
  id: 421613
}

const localhost: Chain = {
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
  localhost,
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

