import { SDK } from "../../sdk";
import { ethers, BigNumber } from "ethers";
import DCNTRentalMarket from '../../contracts/DCNTRentalMarket.json';

const getContract = async (
  sdk: SDK,
) => {
  const address = sdk.chain.addresses.DCNTRentalMarket;
  return new ethers.Contract(
    address,
    DCNTRentalMarket.abi,
    sdk.signerOrProvider
  );
}

export default {
  getContract
};
