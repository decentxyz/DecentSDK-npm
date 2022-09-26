import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNTCrescendo from '../../contracts/DCNTCrescendo.json';
import { MetadataRendererInit } from '../MetadataRenderer';

const deploy = async (
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
  metadataRendererInit: MetadataRendererInit | null,
  onTxPending?: Function,
  onTxReceipt?: Function
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

  onTxPending?.(deployTx);
  const receipt = await deployTx.wait();
  onTxReceipt?.(receipt);

  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTCrescendo').args.DCNTCrescendo;
  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTCrescendo.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
