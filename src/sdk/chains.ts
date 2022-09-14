import { ethers } from "ethers";
import endpoints from './config/endpoints.json';

export type Chain = {
  network: string;
  endpoint: string;
}

const mainnet: Chain = {
  network: 'mainnet',
  endpoint: endpoints.mainnet,
}

const goerli: Chain = {
  network: 'goerli',
  endpoint: endpoints.goerli,
}

const rinkeby: Chain = {
  network: 'rinkeby',
  endpoint: endpoints.rinkeby,
}

const polygon: Chain = {
  network: 'polygon',
  endpoint: endpoints.polygon,
}

const polygonMumbai: Chain = {
  network: 'polygonMumbai',
  endpoint: endpoints.polygonMumbai,
}

const optimism: Chain = {
  network: 'optimism',
  endpoint: endpoints.optimism,
}

const optimismGoerli: Chain = {
  network: 'optimismGoerli',
  endpoint: endpoints.optimismGoerli,
}

const arbitrum: Chain = {
  network: 'arbitrum',
  endpoint: endpoints.arbitrum,
}

const arbitrumGoerli: Chain = {
  network: 'arbitrumGoerli',
  endpoint: endpoints.arbitrumGoerli,
}

const localhost: Chain = {
  network: 'localhost',
  endpoint: endpoints.localhost,
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
