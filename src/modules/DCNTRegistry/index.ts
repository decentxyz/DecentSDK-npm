import { SDK } from "../../sdk";
import { ethers } from "ethers";
import DCNTRegistry from './contracts/DCNTRegistry.json';

export const getDCNTRegistry = async (
  sdk: SDK,
) => {
  const address = await sdk.contract.contractRegistry();
  return new ethers.Contract(
    address,
    DCNTRegistry.abi,
    sdk.signerOrProvider
  );
}
