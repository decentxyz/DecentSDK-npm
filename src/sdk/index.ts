import { ethers, Signer, Contract } from "ethers";
import { Provider } from "@ethersproject/providers"
import DCNTSDK from './contracts/DCNTSDK.json';
import { Chain, allChains, chain as DCNTChain } from './chains';

export type SDK = {
  chain: Chain;
  signerOrProvider: Signer | Provider;
  contract: Contract;
}

const chainIdToChain = (chainId: number) => {
  const chain = allChains.find((chain) => chain.id == chainId);
  return chain || DCNTChain.mainnet
};

export const setupDCNTSDK = async(
  chain: Chain | number,
  signerOrProvider: Signer | Provider
) => {
  const sdk = (() => {
    const endpoint = typeof chain == "number" ? chainIdToChain(chain).endpoint : chain.endpoint
    const contract = new ethers.Contract(
      endpoint,
      DCNTSDK.abi,
      signerOrProvider
    );

    return {
      chain,
      signerOrProvider,
      contract
    };
  })();

  return sdk;
}
