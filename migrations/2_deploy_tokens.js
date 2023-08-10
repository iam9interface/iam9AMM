const LulaToken = artifacts.require("LulaToken");
const BolsonaroToken = artifacts.require("BolsonaroToken");

module.exports = function(deployer) {
  deployer.deploy(LulaToken);
  deployer.deploy(BolsonaroToken);
};
