import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
import DCNTVaultNFT from '../../contracts/DCNTVaultNFT.json';
import { MetadataRendererInit } from '../MetadataRenderer';
import { TokenGateConfig } from '../Edition';
import edition from '../Edition';
import vault from '../Vault';

const create = async(
  sdk: SDK,
  name: string,
  symbol: string,
  hasAdjustableCap: boolean,
  maxTokens: number,
  tokenPrice: BigNumber,
  maxTokenPurchase: number,
  presaleMerkleRoot: string | null,
  presaleStart: number,
  presaleEnd: number | BigNumber,
  saleStart: number,
  saleEnd: number | BigNumber,
  royaltyBPS: number,
  contractURI: string,
  metadataURI: string,
  metadataRendererInit: MetadataRendererInit | null,
  tokenGateConfig: TokenGateConfig | null,
  vaultDistributionTokenAddress: string,
  unlockDate: number,
  supports4907: boolean,
  onTxPending?: Function,
  onTxReceipt?: Function,
  parentIP: string = ethers.constants.AddressZero
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
      hasAdjustableCap,
      maxTokens,
      tokenPrice,
      maxTokenPurchase,
      presaleMerkleRoot: presaleMerkleRoot || ethers.constants.HashZero,
      presaleStart,
      presaleEnd,
      saleStart,
      saleEnd,
      royaltyBPS,
    },
    {
      contractURI,
      metadataURI,
      metadataRendererInit: encodedMetadata,
      parentIP
    },
    tokenGateConfig || {
      tokenAddress: ethers.constants.AddressZero,
      minBalance: 0,
      saleType: 0,
    },
    vaultDistributionTokenAddress,
    unlockDate,
    supports4907
  );

  onTxPending?.(deployTx);
  const receipt = await deployTx.wait();
  onTxReceipt?.(receipt);

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
