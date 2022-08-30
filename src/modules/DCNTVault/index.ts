import { ethers, Contract } from "ethers";
import DCNTVault from './contracts/DCNTVault.json';

export const deployDCNTVault = async (
  DCNTSDK: Contract,
  _vaultDistributionTokenAddress: string,
  _nftVaultKeyAddress: string,
  _nftTotalSupply: number,
  _unlockDate: number
) => {
  const deployTx = await DCNTSDK.deployDCNTVault(
    _vaultDistributionTokenAddress,
    _nftVaultKeyAddress,
    _nftTotalSupply,
    _unlockDate
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTVault').args.DCNTVault;

  return getDCNTVault(DCNTSDK, address);
}

export const getDCNTVault = async (
  DCNTSDK: Contract,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTVault.abi,
    DCNTSDK.signer || DCNTSDK.provider
  );
}
