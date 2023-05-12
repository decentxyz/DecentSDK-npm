import { SDK } from "../../sdk";
import { ethers, BigNumber, Contract } from "ethers";
import DCNTSeries from '../../contracts/DCNTSeries.json';
import { TokenGateConfig, TokenGateNull } from '../Edition';
import { txOverrides } from '../../utils/txOverrides';

export type DropConfig = {
  maxTokens: number | BigNumber,
  tokenPrice: BigNumber,
  maxTokensPerOwner: number,
  presaleMerkleRoot: string | null,
  presaleStart: number,
  presaleEnd: number | BigNumber,
  saleStart: number,
  saleEnd: number | BigNumber,
  tokenGate: TokenGateConfig | null,
}

export type DropMap = {
  tokenIds: number[];
  tokenIdDropIds: number[];
  dropIds: number[];
  drops: DropConfig[];
}

export const DropMapNull = {
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
      tokenGate: defaultDrop.tokenGate || TokenGateNull
    },
    {
      tokenIds: dropOverrides?.tokenIds ?? [],
      tokenIdDropIds: dropOverrides?.tokenIdDropIds ?? [],
      dropIds: dropOverrides?.dropIds ?? [],
      drops: dropOverrides?.drops.map((drop) => ({
          ...drop,
          presaleMerkleRoot: drop.presaleMerkleRoot || ethers.constants.HashZero,
          tokenGate: drop.tokenGate || TokenGateNull
      })) || [],
    },
    await txOverrides(sdk.signerOrProvider)
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
