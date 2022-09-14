import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
export declare const deployDCNT4907A: (sdk: SDK, name: string, symbol: string, maxTokens: number, tokenPrice: BigNumber, maxTokenPurchase: number) => Promise<ethers.Contract>;
export declare const getDCNT4907A: (sdk: SDK, address: string) => Promise<ethers.Contract>;
