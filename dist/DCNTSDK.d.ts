import { ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import { Chain } from './chains';
export declare const setupDCNTSDK: (chainOrAddress: Chain | string, signerOrProvider: Signer | Provider) => Promise<ethers.Contract>;
