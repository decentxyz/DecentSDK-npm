import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
import { MetadataRendererInit } from '../DCNTMetadataRenderer';
export declare const deployDCNTCrescendo: (sdk: SDK, name: string, symbol: string, initialPrice: BigNumber, step1: BigNumber, step2: BigNumber, hitch: number, takeRateBPS: number, unlockDate: number, royaltyBPS: number, metadataURI: string, metadataRendererInit: MetadataRendererInit | null) => Promise<ethers.Contract>;
export declare const getDCNTCrescendo: (sdk: SDK, address: string) => Promise<ethers.Contract>;
