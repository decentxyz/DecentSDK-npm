import { SDK } from "../../sdk";
import { ethers } from "ethers";
import DCNTRegistry from '../../contracts/DCNTRegistry.json';

const getContract = async (
  sdk: SDK,
) => {
  const address = await sdk.contract.contractRegistry();
  return new ethers.Contract(
    address,
    DCNTRegistry.abi,
    sdk.signerOrProvider
  );
}

const query = async (
  sdk: SDK,
  address: string,
) => {
  const registry = await getContract(sdk);
  return registry.query(address);
}

export default {
  query,
  getContract,
};
