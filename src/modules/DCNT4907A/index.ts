import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNT4907A from './contracts/DCNT4907A.json';
import { MetadataRendererInit } from '../DCNTMetadataRenderer';

export const deployDCNT4907A = async (
  sdk: SDK,
  name: string,
  symbol: string,
  maxTokens: number,
  tokenPrice: BigNumber,
  maxTokenPurchase: number,
  royaltyBPS: number,
  metadataURI: string,
  metadataRendererInit: MetadataRendererInit | null
) => {
  const encodedMetadata = metadataRendererInit != null
    ? ethers.utils.AbiCoder.prototype.encode(
        ['string', 'string', 'string'],
        [
          metadataRendererInit.description,
          metadataRendererInit.imageURI,
          metadataRendererInit.animationURI
        ]
      )
    : [];

  const deployTx = await sdk.contract.deployDCNT4907A(
    {
      name,
      symbol,
      maxTokens,
      tokenPrice,
      maxTokenPurchase,
      royaltyBPS,
    },
    {
      metadataURI,
      metadataRendererInit: encodedMetadata,
    }
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNT4907A').args.DCNT4907A;

  return getDCNT4907A(sdk, address);
}

export const getDCNT4907A = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNT4907A.abi,
    sdk.signerOrProvider
  );
}

