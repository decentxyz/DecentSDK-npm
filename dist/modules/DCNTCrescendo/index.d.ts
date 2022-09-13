import { ethers, BigNumber, Contract } from "ethers";
export declare const deployDCNTCrescendo: (DCNTSDK: Contract, name: string, symbol: string, uri: string, initialPrice: BigNumber, step1: BigNumber, step2: BigNumber, hitch: number, trNum: number, trDenom: number, payouts: string) => Promise<ethers.Contract>;
export declare const getDCNTCrescendo: (DCNTSDK: Contract, address: string) => Promise<ethers.Contract>;
