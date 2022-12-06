require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_HTTP_URL = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.RPC_API_KEY}`;
const PRIVATE_KEY = `0x${process.env.ACCOUNT_KEY}`;
const POLYGONSCAN_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};
