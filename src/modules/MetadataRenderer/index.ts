import { SDK } from "../../sdk";
import { ethers } from "ethers";
import DCNTMetadataRenderer from '../../contracts/DCNTMetadataRenderer.json';

export type MetadataRendererInit = {
  description: string;
  imageURI: string;
  animationURI: string;
}

export const getContract = async (
  sdk: SDK,
) => {
  const address = await sdk.contract.metadataRenderer();
  return new ethers.Contract(
    address,
    DCNTMetadataRenderer.abi,
    sdk.signerOrProvider
  );
}

export default {
  getContract,
};
