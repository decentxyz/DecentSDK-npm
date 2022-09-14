import { ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers"
import DCNTSDK from './contracts/DCNTSDK.json';
import { Chain, allChains, chain as DCNTChain } from './chains';

const chainIdToChain = (chainId: number) => {
  const chain = allChains.find((chain) => chain.id == chainId);
  return chain || DCNTChain.mainnet
};


export const setupDCNTSDK = async(
  chainOrAddress: Chain | number,
  signerOrProvider: Signer | Provider
) => {
  const endpoint =  ethers.utils.getAddress( 
    typeof chainOrAddress == 'number' ? 
    chainIdToChain(chainOrAddress)?.endpoint : 
    chainOrAddress.endpoint
  )

  return new ethers.Contract(
    endpoint,
    DCNTSDK.abi,
    signerOrProvider
  )
}
