import { SDK } from "../../sdk";
import { ethers } from "ethers";
declare const _default: {
    deploy: (sdk: SDK, vaultDistributionTokenAddress: string, nftVaultKeyAddress: string, nftTotalSupply: number, unlockDate: number, onTxPending?: Function | undefined, onTxReceipt?: Function | undefined) => Promise<ethers.Contract>;
    getContract: (sdk: SDK, address: string) => Promise<ethers.Contract>;
};
export default _default;
