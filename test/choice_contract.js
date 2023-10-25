const ChoiceContract = artifacts.require("ChoiceContract");

contract("ChoiceContract", (accounts) => {
  it("should add options correctly", async () => {
    const instance = await ChoiceContract.deployed();
    await instance.addOption("Kylian Mbappe", { from: accounts[0] });

    const option = await instance.options(3);
    assert.equal(option.name, "Kylian Mbappe");
  });

  it("should allow voting", async () => {
    const instance = await ChoiceContract.deployed();
    await instance.vote(1, { from: accounts[1] });

    const voteCount = await instance.getVoteCount(1);
    assert.equal(voteCount.toNumber(), 1);
  });
});
