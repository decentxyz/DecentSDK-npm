import { Signer } from "@ethersproject/abstract-signer";
import { Provider } from "@ethersproject/abstract-provider";

export const txOverrides = async (signerOrProvider: Signer | Provider) => {
  const signer = signerOrProvider as Signer;
  const chainId = await signer.getChainId();
  if ( chainId === 137 ) {
    const { gasPrice } = await signer.getFeeData();
    return { gasPrice };
  }
  return {};
}
