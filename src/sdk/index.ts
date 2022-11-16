import { ethers, Contract } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import DCNTSDK from '../contracts/DCNTSDK.json';
import { Chain, chain } from '../chains';

export type SDK = {
  chain: Chain;
  signerOrProvider: Signer | Provider;
  contract: Contract;
}

export class DecentSDK {
  chain: Chain;
  signerOrProvider: Signer | Provider;
  contract: Contract;

  constructor(
    chainOrChainId: Chain | number,
    signerOrProvider: Signer | Provider
  ) {
    this.chain = typeof chainOrChainId == "number"
      ? chain.withId(chainOrChainId)
      : chainOrChainId;

    this.signerOrProvider = signerOrProvider;

    this.contract = new ethers.Contract(
      this.chain.addresses.DCNTSDK,
      DCNTSDK.abi,
      signerOrProvider
    );
  }
}