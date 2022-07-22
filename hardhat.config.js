require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path: '.env'});

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const MUMBAY_PRIVATE_KEY = process.env.MUMBAY_PRIVATE_KEY

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: ALCHEMY_API_URL,
      accounts: [MUMBAY_PRIVATE_KEY]
    },
  },
  solidity: "0.8.9",
};
