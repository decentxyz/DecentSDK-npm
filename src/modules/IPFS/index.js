import { NFTStorage } from "nft.storage";

export default createIpfsMetadata = async () => {
  const client = new NFTStorage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGMzNTA3ZEY4NkNlZTgwZUExNTQyMzhkMDQ4NDVGOTg2MjM0NmI5M0EiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MzcwMDQ3NTM0MiwibmFtZSI6ImRlY2VudC1zZGsifQ.xKo6Lgznxai4GbZSc5jJwbisjWM9aA-RK7uVifHkrok",
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
