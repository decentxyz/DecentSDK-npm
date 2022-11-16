import { SDK } from "../../sdk";
import { ethers } from "ethers";
import { MetadataRendererInit } from '../MetadataRenderer';
declare const _default: {
    deploy: (sdk: SDK, name: string, symbol: string, initialPrice: ethers.BigNumber, step1: ethers.BigNumber, step2: ethers.BigNumber, hitch: number, takeRateBPS: number, unlockDate: number, saleStart: number, royaltyBPS: number, contractURI: string, metadataURI: string, metadataRendererInit: MetadataRendererInit | null, onTxPending?: Function | undefined, onTxReceipt?: Function | undefined, parentIP?: string) => Promise<ethers.Contract>;
    getContract: (sdk: SDK, address: string) => Promise<ethers.Contract>;
};
export default _default;
