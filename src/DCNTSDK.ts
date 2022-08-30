import { ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers"
import DCNTSDK from './contracts/DCNTSDK.json';
import { Chain } from './chains';

export const setupDCNTSDK = async(
  chainOrAddress: Chain | string,
  signerOrProvider: Signer | Provider
) => {
  const endpoint = ethers.utils.getAddress(
    typeof chainOrAddress == 'string'
      ? chainOrAddress
      : chainOrAddress.endpoint
  );

  return new ethers.Contract(
    endpoint,
    DCNTSDK.abi,
    signerOrProvider
  )
}
