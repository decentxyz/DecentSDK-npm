import { SDK } from "../../sdk";
import { ethers } from "ethers";
export declare const deployDCNTVault: (sdk: SDK, _vaultDistributionTokenAddress: string, _nftVaultKeyAddress: string, _nftTotalSupply: number, _unlockDate: number) => Promise<ethers.Contract>;
export declare const getDCNTVault: (sdk: SDK, address: string) => Promise<ethers.Contract>;
