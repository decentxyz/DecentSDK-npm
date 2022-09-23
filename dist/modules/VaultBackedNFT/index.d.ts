import { SDK } from "../../sdk";
import { ethers } from "ethers";
import { MetadataRendererInit } from '../DCNTMetadataRenderer';
declare const _default: {
    create: (sdk: SDK, name: string, symbol: string, maxTokens: number, tokenPrice: ethers.BigNumber, maxTokenPurchase: number, royaltyBPS: number, metadataURI: string, metadataRendererInit: MetadataRendererInit | null, vaultDistributionTokenAddress: string, unlockDate: number, supports4907: boolean) => Promise<ethers.Contract[]>;
};
export default _default;
