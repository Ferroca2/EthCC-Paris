const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  
  let txHash, txReceipt
  const Sample = await hre.ethers.getContractFactory("Sample");
  const sample = await Sample.deploy('tilted');
  await sample.deployed();

  txHash = sample.deployTransaction.hash;
  txReceipt = await hre.ethers.provider.waitForTransaction(txHash);
  let sampleaddress = txReceipt.contractAddress

  console.log("mechanism deployed to:", sampleaddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
