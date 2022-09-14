import { SDK } from "../../sdk";
import { ethers } from "ethers";
export declare const deployDCNTStaking: (sdk: SDK, nft: string, token: string, vaultDuration: number, totalSupply: number) => Promise<ethers.Contract>;
export declare const getDCNTStaking: (sdk: SDK, address: string) => Promise<ethers.Contract>;
