import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
import { MetadataRendererInit } from '../DCNTMetadataRenderer';
export declare const deployDCNT721A: (sdk: SDK, name: string, symbol: string, maxTokens: number, tokenPrice: BigNumber, maxTokenPurchase: number, royaltyBPS: number, metadataURI: string, metadataRendererInit: MetadataRendererInit | null) => Promise<ethers.Contract>;
export declare const getDCNT721A: (sdk: SDK, address: string) => Promise<ethers.Contract>;
