const hre = require("hardhat");

async function main() {
  const NftMarketPlace = await hre.ethers.getContractFactory("NftMarket");
  const nftMarketPlace = await NftMarketPlace.deploy();

  await nftMarketPlace.deployed();

  console.log("NFT Marketplace deployed to:", nftMarketPlace.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
