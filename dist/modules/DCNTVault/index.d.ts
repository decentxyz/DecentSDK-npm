import { ethers, Contract } from "ethers";
export declare const deployDCNTVault: (DCNTSDK: Contract, _vaultDistributionTokenAddress: string, _nftVaultKeyAddress: string, _nftTotalSupply: number, _unlockDate: number) => Promise<ethers.Contract>;
export declare const getDCNTVault: (DCNTSDK: Contract, address: string) => Promise<ethers.Contract>;
