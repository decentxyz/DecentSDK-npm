import { ethers, Contract } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import { Chain } from './chains';
export declare type SDK = {
    chain: Chain;
    signerOrProvider: Signer | Provider;
    contract: Contract;
};
export declare const setupDCNTSDK: (chainOrChainId: Chain | number, signerOrProvider: Signer | Provider) => Promise<{
    chain: Chain;
    signerOrProvider: ethers.Signer | ethers.providers.Provider;
    contract: ethers.Contract;
}>;
