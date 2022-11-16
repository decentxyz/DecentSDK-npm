import { SDK } from "../../sdk";
import { ethers } from "ethers";
declare const _default: {
    query: (sdk: SDK, address: string) => Promise<any>;
    getContract: (sdk: SDK) => Promise<ethers.Contract>;
};
export default _default;
