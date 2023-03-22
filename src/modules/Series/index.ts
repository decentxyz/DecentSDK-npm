import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNTSeries from '../../contracts/DCNTSeries.json';
import { TokenGateConfig } from '../Edition';


export type DropConfig = {
  maxTokens: number | BigNumber,
  tokenPrice: BigNumber,
  maxTokensPerOwner: number,
  presaleMerkleRoot: string | null,
  presaleStart: number,
  presaleEnd: number | BigNumber,
  saleStart: number,
  saleEnd: number | BigNumber,
  tokenGateConfig: TokenGateConfig | null,
}

export type DropMap = {
  tokenIds: number[];
  tokenIdDropIds: number[];
  dropIds: number[];
  drops: DropConfig[];
}

const DropMapNull = {
  tokenIds: [],
  tokenIdDropIds: [],
  dropIds: [],
  drops: []
}

const deploy = async (
  sdk: SDK,
  name: string,
  symbol: string,
  hasAdjustableCaps: boolean,
  isSoulbound: boolean,
  startTokenId: number,
  endTokenId: number,
  royaltyBPS: number,
  feeManager: string,
  payoutAddress: string,
  currencyOracle: string,
  contractURI: string,
  metadataURI: string,
  defaultDrop: DropConfig,
  dropOverrides: DropMap | null,
  onTxPending?: Function,
  onTxReceipt?: Function,
) => {
  const deployTx = await sdk.contract.deployDCNTSeries(
    {
      name,
      symbol,
      contractURI,
      metadataURI,
      startTokenId,
      endTokenId,
      royaltyBPS,
      feeManager: feeManager || ethers.constants.AddressZero,
      payoutAddress: payoutAddress || ethers.constants.AddressZero,
      currencyOracle: currencyOracle || ethers.constants.AddressZero,
      isSoulbound,
      hasAdjustableCaps,
    },
    {
      ...defaultDrop,
      presaleMerkleRoot: defaultDrop.presaleMerkleRoot || ethers.constants.HashZero,
      tokenGate: defaultDrop.tokenGateConfig || {
        tokenAddress: ethers.constants.AddressZero,
        minBalance: 0,
        saleType: 0,
      }
    },
    dropOverrides || DropMapNull
  );

  onTxPending?.(deployTx);
  const receipt = await deployTx.wait();
  onTxReceipt?.(receipt);

  const address = receipt.events.find((x: any) => x.event === 'DeployDCNTSeries').args.DCNTSeries;
  return getContract(sdk, address);
}

const getContract = async (
  sdk: SDK,
  address: string
) => {
  return new ethers.Contract(
    address,
    DCNTSeries.abi,
    sdk.signerOrProvider
  );
}

export default {
  deploy,
  getContract,
};
