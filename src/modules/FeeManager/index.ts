import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
import FeeManager from '../../contracts/FeeManager.json';
import { Signer } from "@ethersproject/abstract-signer";

const deploy = async (
  sdk: SDK,
  fee: number | BigNumber,
  commissionBPS: number | BigNumber,
  onTxPending?: Function,
  onTxReceipt?: Function
) => {
  const factory = new ethers.ContractFactory(
    FeeManager.abi,
    FeeManager.bytecode,
    sdk.signerOrProvider as Signer
  );

  const feeManager = await factory.deploy(fee, commissionBPS);

  onTxPending?.(feeManager.deployTransaction);
  const receipt = await feeManager.deployTransaction.wait();
  onTxReceipt?.(receipt);

  return feeManager;
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    FeeManager.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
