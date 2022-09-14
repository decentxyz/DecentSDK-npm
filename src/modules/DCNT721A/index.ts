import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNT721A from './contracts/DCNT721A.json';

export const deployDCNT721A = async (
  sdk: SDK,
  name: string,
  symbol: string,
  maxTokens: number,
  tokenPrice: BigNumber,
  maxTokenPurchase: number
) => {
  const deployTx = await sdk.contract.deployDCNT721A(
    name,
    symbol,
    maxTokens,
    tokenPrice,
    maxTokenPurchase
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNT721A').args.DCNT721A;

  return getDCNT721A(sdk, address);
}

export const getDCNT721A = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNT721A.abi,
    sdk.signerOrProvider
  );
}

