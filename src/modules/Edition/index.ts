import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNT721A from '../../contracts/DCNT721A.json';
import { MetadataRendererInit } from '../MetadataRenderer';

export type TokenGateConfig = {
  tokenAddress: string;
  minBalance: number;
  saleType: number;
}

const deploy = async (
  sdk: SDK,
  name: string,
  symbol: string,
  adjustableCap: boolean,
  maxTokens: number,
  tokenPrice: BigNumber,
  maxTokenPurchase: number,
  presaleStart: number,
  presaleEnd: number,
  saleStart: number,
  royaltyBPS: number,
  contractURI: string,
  metadataURI: string,
  metadataRendererInit: MetadataRendererInit | null,
  tokenGateConfig: TokenGateConfig | null,
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

  const deployTx = await sdk.contract.deployDCNT721A(
    {
      name,
      symbol,
      adjustableCap,
      maxTokens,
      tokenPrice,
      maxTokenPurchase,
      presaleStart,
      presaleEnd,
      saleStart,
      royaltyBPS,
    },
    {
      contractURI,
      metadataURI,
      metadataRendererInit: encodedMetadata,
      parentIP,
    },
    tokenGateConfig || {
      tokenAddress: ethers.constants.AddressZero,
      minBalance: 0,
      saleType: 0,
    }
  );

  onTxPending?.(deployTx);
  const receipt = await deployTx.wait();
  onTxReceipt?.(receipt);

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
