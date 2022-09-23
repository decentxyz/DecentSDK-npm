import { ethers, Contract } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import DCNTSDK from './contracts/DCNTSDK.json';
import { Chain, allChains, chain } from './chains';

export type SDK = {
  chain: Chain;
  signerOrProvider: Signer | Provider;
  contract: Contract;
}

const chainIdToChain = (chainId: number) => {
  const match = allChains.find((chain) => chain.id == chainId);
  return match || chain.mainnet
};

export const setupDCNTSDK = async(
  chainOrChainId: Chain | number,
  signerOrProvider: Signer | Provider
) => {
  const sdk = (() => {
    const sdkChain = typeof chainOrChainId == "number"
      ? chainIdToChain(chainOrChainId)
      : chainOrChainId;

    const endpoint = sdkChain.addresses.DCNTSDK;

    const contract = new ethers.Contract(
      endpoint,
      DCNTSDK.abi,
      signerOrProvider
    );

    return {
      chain: sdkChain,
      signerOrProvider,
      contract
    };
  })();

  return sdk;
}
