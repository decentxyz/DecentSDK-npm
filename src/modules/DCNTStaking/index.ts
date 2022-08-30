import { ethers, Contract } from "ethers";
import DCNTStaking from './contracts/DCNTStaking.json';

export const deployDCNTStaking = async (
  DCNTSDK: Contract,
  nft: string,
  token: string,
  vaultDuration: number,
  totalSupply: number
) => {
  const deployTx = await DCNTSDK.deployDCNTStaking(
    nft,
    token,
    vaultDuration,
    totalSupply
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTStaking').args.DCNTStaking;

  return getDCNTStaking(DCNTSDK, address);
}

export const getDCNTStaking = async (
  DCNTSDK: Contract,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTStaking.abi,
    DCNTSDK.signer || DCNTSDK.provider
  );
}
