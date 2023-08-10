const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "oxygen number decide grocery apple diary anxiety excess ship summer whale recall";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    testnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://data-seed-prebsc-1-s1.binance.org:8545/");
      },
      network_id: '97',
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://bsc-dataseed.binance.org/");
      },
      network_id: '56',
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.5.16"
    }
  }
};
