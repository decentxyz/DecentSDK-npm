# Welcome to the Decent SDK

### Core Resources

(Protocol Documentation)[https://docs.decent.xyz/]: includes module descriptions, available  functions for each contract, and protocol deployment addresses.

(Protocol Repository)[https://github.com/decentxyz/DecentSDK-protocol]: you can find community discussions about new PR's and issues in the Discussions panel of this repository.

(SDK Repository)[https://github.com/decentxyz/DecentSDK-npm]

(Starter Repo)[https://github.com/decentxyz/Start-Decent]: the fastest way to publish your first application using Decent is to fork this repository (NextJS, Tailwind, RainbowKit, DecentSDK).

### Getting Started

`npm i @decent.xyz/sdk`

##### Example deployment of Decent's 721A contract

    import { DecentSDK, edition, ipfs } from '@decent.xyz/sdk';
    // wagmi is a core dependency to deploy contracts; DecentSDK get functions can be used without
     import { useSigner, useNetwork } from 'wagmi';

    // Define your metadata schema before deploying contract
      const deployFunction = async () => {
            const ipfsHash = await ipfs.createMetadata(metadata).then((res: any) => {
              return res
            });

            Decent's defaults to storing metadata on-chain on L2's and on IPFS for Ethereum mainnet
            let onChainMetadata = null;
            let offChainMetadata = '';

            if ( chain.id === 1 || chain.id == 5 ) {
              offChainMetadata = `${ipfsHash.url}?`;
            } else {
              onChainMetadata = {
                metadata: ipfsHash?.data?.metadata || "",
              }
            }

            const sdk = new DecentSDK(chain.id, signer);

            let nft;
            try {
              nft = await edition.deploy(
                sdk,
                collectionName,
                symbol,
                editionSize,
                tokenPrice,
                maxTokenPurchase,
                creatorRoyalty,
                offChainMetadata,
                onChainMetadata,
              );
            } 
          }
        

For the artists of every industry 🤝
