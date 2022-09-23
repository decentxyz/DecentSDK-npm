import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
import DCNTVaultNFT from './contracts/DCNTVaultNFT.json';
import { MetadataRendererInit } from '../DCNTMetadataRenderer';
import { getDCNT721A } from '../DCNT721A';
import { getDCNTVault } from '../DCNTVault';

const create = async(
  sdk: SDK,
  name: string,
  symbol: string,
  maxTokens: number,
  tokenPrice: BigNumber,
  maxTokenPurchase: number,
  royaltyBPS: number,
  metadataURI: string,
  metadataRendererInit: MetadataRendererInit | null,
  vaultDistributionTokenAddress: string,
  unlockDate: number,
  supports4907: boolean
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

  const dcntVaultNFT = await getDCNTVaultNFT(sdk);

  const deployTx = await dcntVaultNFT.create(
    sdk.contract.address,
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
    },
    vaultDistributionTokenAddress,
    unlockDate,
    supports4907
  );

  const receipt = await deployTx.wait();
  const nft = receipt.events.find((x: any) => x.event === 'Create').args.nft;
  const vault = receipt.events.find((x: any) => x.event === 'Create').args.vault;

  return [
    await getDCNT721A(sdk, nft),
    await getDCNTVault(sdk, vault)
  ];
}

const getDCNTVaultNFT = async (
  sdk: SDK
) => {
  const endpoint = sdk.chain.addresses.DCNTVaultNFT;

  return new ethers.Contract(
    endpoint,
    DCNTVaultNFT.abi,
    sdk.signerOrProvider
  );
}

export default {
  create
};
