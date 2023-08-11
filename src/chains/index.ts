import { Addresses, addresses } from '../addresses';

export type Chain = {
  id: number;
  network: string;
  addresses: Addresses;
}

const mainnet: Chain = {
  id: 1,
  network: 'mainnet',
  addresses: addresses.mainnet,
}

const goerli: Chain = {
  id: 5,
  network: 'goerli',
  addresses: addresses.goerli,
}

const sepolia: Chain = {
  id: 11_155_111,
  network: 'sepolia',
  addresses: addresses.sepolia,
}

const polygon: Chain = {
  id: 137,
  network: 'polygon',
  addresses: addresses.polygon,
}

const polygonMumbai: Chain = {
  id: 80_001,
  network: 'polygonMumbai',
  addresses: addresses.polygonMumbai,
}

const optimism: Chain = {
  id: 10,
  network: 'optimism',
  addresses: addresses.optimism,
}

const optimismGoerli: Chain = {
  id: 420,
  network: 'optimismGoerli',
  addresses: addresses.optimismGoerli,
}

const arbitrum: Chain = {
  id: 42_161,
  network: 'arbitrum',
  addresses: addresses.arbitrum,
}

const arbitrumGoerli: Chain = {
  id: 421_613,
  network: 'arbitrumGoerli',
  addresses: addresses.arbitrumGoerli,
}

const base: Chain = {
  id: 8_453,
  network: 'base',
  addresses: addresses.base,
}

const baseGoerli: Chain = {
  id: 84_531,
  network: 'baseGoerli',
  addresses: addresses.baseGoerli,
}

const zora: Chain = {
  id: 7_777_777,
  network: 'zora',
  addresses: addresses.zora,
}

const zoraGoerli: Chain = {
  id: 999,
  network: 'zoraGoerli',
  addresses: addresses.zoraGoerli,
}

const localhost: Chain = {
  id: 1_337,
  network: 'localhost',
  addresses: addresses.hardhat,
}

const hardhat: Chain = {
  id: 31_337,
  network: 'localhost',
  addresses: addresses.hardhat,
}

const withId = (chainId: number) => {
  const match = allChains.find((chain) => chain.id == chainId);
  return match || chain.mainnet
};

export const chain = {
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
  localhost,
  withId,
}

export const allChains = [
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
  localhost,
];
