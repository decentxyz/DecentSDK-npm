import { NFTStorage } from "nft.storage";

export const createIpfsMetadata = async () => {
  const client = new NFTStorage({
    token: process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY,
  });
  const ipfs = await client
    .store(metadata)
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      return { error: error.message };
    });
  return ipfs;
};
