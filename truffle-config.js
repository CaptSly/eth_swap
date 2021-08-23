require('babel-register');
require('babel-polyfill');
const { projectId, mnemonic } = require ('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" // Match any network id
    },

  ropsten: {
    provider: () => new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/9013645911254d9a911327a6d61c2703'),
    network_id: 3,
    gas: 5500000,
    confirmations: 2,
    timeoutBlocks: 200,
    skipDryRun: true
  }


  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
