import { ethers, BigNumber, Contract } from "ethers";
import DCNTCrescendo from './contracts/DCNTCrescendo.json';

export const deployDCNTCrescendo = async (
  DCNTSDK: Contract,
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
  const deployTx = await DCNTSDK.deployDCNTCrescendo(
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

  return getDCNTCrescendo(DCNTSDK, address);
}

export const getDCNTCrescendo = async (
  DCNTSDK: Contract,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTCrescendo.abi,
    DCNTSDK.signer || DCNTSDK.provider
  );
}
