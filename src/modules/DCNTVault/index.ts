import { SDK } from "../../sdk";
import { ethers, Contract } from "ethers";
import DCNTVault from './contracts/DCNTVault.json';

export const deployDCNTVault = async (
  sdk: SDK,
  _vaultDistributionTokenAddress: string,
  _nftVaultKeyAddress: string,
  _nftTotalSupply: number,
  _unlockDate: number
) => {
  const deployTx = await sdk.contract.deployDCNTVault(
    _vaultDistributionTokenAddress,
    _nftVaultKeyAddress,
    _nftTotalSupply,
    _unlockDate
  );

  const receipt = await deployTx.wait();
  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTVault').args.DCNTVault;

  return getDCNTVault(sdk, address);
}

export const getDCNTVault = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTVault.abi,
    sdk.signerOrProvider
  );
}
