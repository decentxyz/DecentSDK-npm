import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
import DCNTVaultNFT from '../../contracts/DCNTVaultNFT.json';
import { MetadataRendererInit } from '../MetadataRenderer';
import edition from '../Edition';
import vault from '../Vault';

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

  const dcntVaultNFT = await getContract(sdk);

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
  const nftAddr = receipt.events.find((x: any) => x.event === 'Create').args.nft;
  const vaultAddr = receipt.events.find((x: any) => x.event === 'Create').args.vault;

  return [
    await edition.getContract(sdk, nftAddr),
    await vault.getContract(sdk, vaultAddr),
  ];
}

const getContract = async (
  sdk: SDK
) => {
  const address = sdk.chain.addresses.DCNTVaultNFT;

  return new ethers.Contract(
    address,
    DCNTVaultNFT.abi,
    sdk.signerOrProvider
  );
}

export default {
  create
};
