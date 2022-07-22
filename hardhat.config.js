require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path: '.env'});

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const GOERLI_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: ALCHEMY_API_URL,
      accounts: [GOERLI_PRIVATE_KEY]
    },
  },
  solidity: "0.8.9",
};
