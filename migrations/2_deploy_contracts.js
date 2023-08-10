const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(PancakeFactory, accounts[0]);
};
