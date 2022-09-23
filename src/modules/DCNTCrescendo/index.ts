import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNTCrescendo from './contracts/DCNTCrescendo.json';
import { MetadataRendererInit } from '../DCNTMetadataRenderer';

export const deployDCNTCrescendo = async (
  sdk: SDK,
  name: string,
  symbol: string,
  initialPrice: BigNumber,
  step1: BigNumber,
  step2: BigNumber,
  hitch: number,
  takeRateBPS: number,
  unlockDate: number,
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

  const deployTx = await sdk.contract.deployDCNTCrescendo(
    {
      name,
      symbol,
      initialPrice,
      step1,
      step2,
      hitch,
      takeRateBPS,
      unlockDate,
      royaltyBPS,
    },
    {
      metadataURI,
      metadataRendererInit: encodedMetadata,
    }
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTCrescendo').args.DCNTCrescendo;

  return getDCNTCrescendo(sdk, address);
}

export const getDCNTCrescendo = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTCrescendo.abi,
    sdk.signerOrProvider
  );
}
