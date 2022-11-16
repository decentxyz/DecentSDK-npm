import { Contract } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import { Chain } from '../chains';
export declare type SDK = {
    chain: Chain;
    signerOrProvider: Signer | Provider;
    contract: Contract;
};
export declare class DecentSDK {
    chain: Chain;
    signerOrProvider: Signer | Provider;
    contract: Contract;
    constructor(chainOrChainId: Chain | number, signerOrProvider: Signer | Provider);
}
