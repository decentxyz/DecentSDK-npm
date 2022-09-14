import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNTCrescendo from './contracts/DCNTCrescendo.json';

export const deployDCNTCrescendo = async (
  sdk: SDK,
  name: string,
  symbol: string,
  uri: string,
  initialPrice: BigNumber,
  step1: BigNumber,
  step2: BigNumber,
  hitch: number,
  trNum: number,
  trDenom: number,
  payouts: string
) => {
  const deployTx = await sdk.contract.deployDCNTCrescendo(
    name,
    symbol,
    uri,
    initialPrice,
    step1,
    step2,
    hitch,
    trNum,
    trDenom,
    payouts
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTCrescendo').args.DCNTCrescendo;

  return getDCNTCrescendo(sdk, address);
}

export const getDCNTCrescendo = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTCrescendo.abi,
    sdk.signerOrProvider
  );
}
