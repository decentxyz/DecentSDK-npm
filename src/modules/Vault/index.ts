import { SDK } from "../../sdk";
import { ethers, Contract } from "ethers";
import DCNTVault from './contracts/DCNTVault.json';

const deploy = async (
  sdk: SDK,
  vaultDistributionTokenAddress: string,
  nftVaultKeyAddress: string,
  nftTotalSupply: number,
  unlockDate: number
) => {
  const deployTx = await sdk.contract.deployDCNTVault(
    vaultDistributionTokenAddress,
    nftVaultKeyAddress,
    nftTotalSupply,
    unlockDate
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTVault').args.DCNTVault;

  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTVault.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
