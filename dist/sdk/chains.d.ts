import { Addresses } from '../addresses';
export declare type Chain = {
    id: number;
    network: string;
    addresses: Addresses;
};
export declare const chain: {
    mainnet: Chain;
    goerli: Chain;
    rinkeby: Chain;
    polygon: Chain;
    polygonMumbai: Chain;
    optimism: Chain;
    optimismGoerli: Chain;
    arbitrum: Chain;
    arbitrumGoerli: Chain;
    hardhat: Chain;
    localhost: Chain;
};
export declare const allChains: Chain[];
