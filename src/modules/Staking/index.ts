import { SDK } from "../../sdk";
import { ethers, Contract } from "ethers";
import DCNTStaking from '../../contracts/DCNTStaking.json';
import { txOverrides } from '../../utils/txOverrides';

const deploy = async (
  sdk: SDK,
  nft: string,
  token: string,
  vaultDuration: number,
  totalSupply: number,
  onTxPending?: Function,
  onTxReceipt?: Function
) => {
  const deployTx = await sdk.contract.deployDCNTStaking(
    nft,
    token,
    vaultDuration,
    totalSupply,
    await txOverrides(sdk.signerOrProvider)
  );

  onTxPending?.(deployTx);
  const receipt = await deployTx.wait();
  onTxReceipt?.(receipt);

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
