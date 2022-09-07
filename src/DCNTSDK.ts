import { ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers"
import DCNTSDK from './contracts/DCNTSDK.json';
import { Chain } from './chains';

export const setupDCNTSDK = async(
  chain: Chain,
  signerOrProvider: Signer | Provider
) => {
  return new ethers.Contract(
    chain.endpoint,
    DCNTSDK.abi,
    signerOrProvider
  )
}
