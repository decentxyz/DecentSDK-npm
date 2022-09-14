import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
export declare const deployDCNTCrescendo: (sdk: SDK, name: string, symbol: string, uri: string, initialPrice: BigNumber, step1: BigNumber, step2: BigNumber, hitch: number, trNum: number, trDenom: number, payouts: string) => Promise<ethers.Contract>;
export declare const getDCNTCrescendo: (sdk: SDK, address: string) => Promise<ethers.Contract>;
