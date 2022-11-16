import { SDK } from "../../sdk";
import { ethers } from "ethers";
import { MetadataRendererInit } from '../MetadataRenderer';
import { TokenGateConfig } from '../Edition';
declare const _default: {
    create: (sdk: SDK, name: string, symbol: string, hasAdjustableCap: boolean, maxTokens: number, tokenPrice: ethers.BigNumber, maxTokenPurchase: number, presaleMerkleRoot: string | null, presaleStart: number, presaleEnd: number, saleStart: number, saleEnd: number, royaltyBPS: number, contractURI: string, metadataURI: string, metadataRendererInit: MetadataRendererInit | null, tokenGateConfig: TokenGateConfig | null, vaultDistributionTokenAddress: string, unlockDate: number, supports4907: boolean, onTxPending?: Function | undefined, onTxReceipt?: Function | undefined, parentIP?: string) => Promise<ethers.Contract[]>;
};
export default _default;
