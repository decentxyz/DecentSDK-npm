import { ethers } from "ethers";
import endpoints from './config/endpoints.json';

export type Chain = {
  endpoint: string;
}

const mainnet: Chain = {
  endpoint: endpoints.mainnet,
}

const goerli: Chain = {
  endpoint: endpoints.goerli,
}

const rinkeby: Chain = {
  endpoint: endpoints.rinkeby,
}

const polygon: Chain = {
  endpoint: endpoints.polygon,
}

const polygonMumbai: Chain = {
  endpoint: endpoints.polygonMumbai,
}

const optimism: Chain = {
  endpoint: endpoints.optimism,
}

const optimismGoerli: Chain = {
  endpoint: endpoints.optimismGoerli,
}

const arbitrum: Chain = {
  endpoint: endpoints.arbitrum,
}

const arbitrumGoerli: Chain = {
  endpoint: endpoints.arbitrumGoerli,
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
}
