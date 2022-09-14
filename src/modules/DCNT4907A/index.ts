import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNT4907A from './contracts/DCNT4907A.json';

export const deployDCNT4907A = async (
  sdk: SDK,
  name: string,
  symbol: string,
  maxTokens: number,
  tokenPrice: BigNumber,
  maxTokenPurchase: number
) => {
  const deployTx = await sdk.contract.deployDCNT4907A(
    name,
    symbol,
    maxTokens,
    tokenPrice,
    maxTokenPurchase
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

