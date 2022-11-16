import { SDK } from "../../sdk";
import { ethers } from "ethers";
export declare type MetadataRendererInit = {
    description: string;
    imageURI: string;
    animationURI: string;
};
export declare const getContract: (sdk: SDK) => Promise<ethers.Contract>;
declare const _default: {
    getContract: (sdk: SDK) => Promise<ethers.Contract>;
};
export default _default;
