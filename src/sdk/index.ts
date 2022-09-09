import { ethers, Signer, Contract } from "ethers";
import { Provider } from "@ethersproject/providers"
import DCNTSDK from './contracts/DCNTSDK.json';
import { Chain } from './chains';

export type SDK = {
  chain: Chain;
  signerOrProvider: Signer | Provider;
  contract: Contract;
}

export const setupDCNTSDK = async(
  chain: Chain,
  signerOrProvider: Signer | Provider
) => {
  const sdk = (() => {
    const contract = new ethers.Contract(
      chain.endpoint,
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
