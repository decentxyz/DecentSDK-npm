import { ethers, Contract } from "ethers";
export declare const deployDCNTStaking: (DCNTSDK: Contract, nft: string, token: string, vaultDuration: number, totalSupply: number) => Promise<ethers.Contract>;
export declare const getDCNTStaking: (DCNTSDK: Contract, address: string) => Promise<ethers.Contract>;
