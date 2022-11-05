import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNT4907A from '../../contracts/DCNT4907A.json';
import { MetadataRendererInit } from '../MetadataRenderer';
import { TokenGateConfig } from '../Edition';

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

  const deployTx = await sdk.contract.deployDCNT4907A(
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
      parentIP
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

  const address = receipt.events.find((x: any) => x.event === 'DeployDCNT4907A').args.DCNT4907A;
  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNT4907A.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
