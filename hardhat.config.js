require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

let secret = require("./secret");

module.exports = {
solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "testnet",
  networks: {
    hardhat: {
    },
    ropsten: {
      url: secret.url,
      accounts: [secret.key]
    },
    testnet: {
          url: secret.url,
          chainId: 97,
          accounts: [secret.key]
        },

  },
  etherscan: {
          // Your API key for Etherscan
          // Obtain one at https://etherscan.io/
          apiKey: "UR5K6SD2PVUHNMK2MZRB8JNCVA3GIUESN5"
        },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}