import { SDK } from "../../sdk";
import { ethers } from "ethers";
export declare type MetadataRendererInit = {
    description: string;
    imageURI: string;
    animationURI: string;
};
export declare const getDCNTMetadataRenderer: (sdk: SDK) => Promise<ethers.Contract>;
