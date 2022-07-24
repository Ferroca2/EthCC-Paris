const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  
  let txHash, txReceipt
  const WETHtoDAI = await hre.ethers.getContractFactory("WETHtoDAI");
  const wethToDai = await WETHtoDAI.deploy();
  await wethToDai.deployed();

  txHash = wethToDai.deployTransaction.hash;
  txReceipt = await hre.ethers.provider.waitForTransaction(txHash);
  let wethToDaiaddress = txReceipt.contractAddress

  console.log("mechanism deployed to:", wethToDaiaddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
