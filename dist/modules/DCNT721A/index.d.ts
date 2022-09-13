import { ethers, BigNumber, Contract } from "ethers";
export declare const deployDCNT721A: (DCNTSDK: Contract, name: string, symbol: string, maxTokens: number, tokenPrice: BigNumber, maxTokenPurchase: number) => Promise<ethers.Contract>;
export declare const getDCNT721A: (DCNTSDK: Contract, address: string) => Promise<ethers.Contract>;
