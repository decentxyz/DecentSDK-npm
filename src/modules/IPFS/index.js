import { NFTStorage } from "nft.storage";

export default createIpfsMetadata = async () => {
  const client = new NFTStorage({
    // TODO: discuss with Zev / Charlie how we want to manage API key.
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU0NUY3MmE2RTE4ZTc1REZBMTA3Qjc3REIzNDM1NDNjOTQzMEI0RmQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2Mjc1MDI4MjU5NiwibmFtZSI6IkRFQ0VOVCJ9.KaoP8CYmUESkkDo5XoCMEomfQBZiK7E_hpkMUX8uHFY",
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
