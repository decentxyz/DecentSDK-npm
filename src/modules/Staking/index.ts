import { SDK } from "../../sdk";
import { ethers, Contract } from "ethers";
import DCNTStaking from '../../contracts/DCNTStaking.json';

const deploy = async (
  sdk: SDK,
  nft: string,
  token: string,
  vaultDuration: number,
  totalSupply: number
) => {
  const deployTx = await sdk.contract.deployDCNTStaking(
    nft,
    token,
    vaultDuration,
    totalSupply
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTStaking').args.DCNTStaking;

  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTStaking.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
