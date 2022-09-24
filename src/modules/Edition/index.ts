import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNT721A from './contracts/DCNT721A.json';
import { MetadataRendererInit } from '../MetadataRenderer';

const deploy = async (
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

  const deployTx = await sdk.contract.deployDCNT721A(
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
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNT721A').args.DCNT721A;

  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNT721A.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
