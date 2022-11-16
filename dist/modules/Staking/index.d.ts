import { SDK } from "../../sdk";
import { ethers } from "ethers";
declare const _default: {
    deploy: (sdk: SDK, nft: string, token: string, vaultDuration: number, totalSupply: number, onTxPending?: Function | undefined, onTxReceipt?: Function | undefined) => Promise<ethers.Contract>;
    getContract: (sdk: SDK, address: string) => Promise<ethers.Contract>;
};
export default _default;
