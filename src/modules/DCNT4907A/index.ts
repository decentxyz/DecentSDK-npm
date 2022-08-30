import { ethers, BigNumber, Contract } from "ethers";
import DCNT4907A from './contracts/DCNT4907A.json';

export const deployDCNT4907A = async (
  DCNTSDK: Contract,
  name: string,
  symbol: string,
  maxTokens: number,
  tokenPrice: BigNumber,
  maxTokenPurchase: number
) => {
  const deployTx = await DCNTSDK.deployDCNT4907A(
    name,
    symbol,
    maxTokens,
    tokenPrice,
    maxTokenPurchase
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNT4907A').args.DCNT4907A;

  return getDCNT4907A(DCNTSDK, address);
}

export const getDCNT4907A = async (
  DCNTSDK: Contract,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNT4907A.abi,
    DCNTSDK.signer || DCNTSDK.provider
  );
}

