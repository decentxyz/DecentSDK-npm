import { ethers, Signer, Contract } from "ethers";
import { Provider } from "@ethersproject/providers";
import { Chain } from './chains';
export declare type SDK = {
    chain: Chain;
    signerOrProvider: Signer | Provider;
    contract: Contract;
};
export declare const setupDCNTSDK: (chain: Chain | number, signerOrProvider: Signer | Provider) => Promise<{
    contractChain: Chain;
    signerOrProvider: ethers.Signer | ethers.providers.Provider;
    contract: ethers.Contract;
}>;
