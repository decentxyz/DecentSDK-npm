export declare type Chain = {
    network: string;
    endpoint: string;
    id: number;
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
    localhost: Chain;
};
export declare const allChains: Chain[];
