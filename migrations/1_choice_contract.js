const ChoiceContract = artifacts.require("ChoiceContract");

module.exports = function (_deployer) {
  _deployer.deploy(ChoiceContract);
};
