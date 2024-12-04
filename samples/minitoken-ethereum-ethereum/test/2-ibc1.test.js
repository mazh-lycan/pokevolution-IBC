const MiniMessage = artifacts.require("MiniMessage");

contract("MiniMessage", (accounts) => {
  it("should have evolved kadabra into alakazam in alice account on ibc0", () =>
  MiniMessage.deployed()
      .then((instance) => instance.balanceOf(accounts[1]))
      .then((mensajin) => {
        assert.equal(mensajin.valueOf(), "Machamp", "alakazam wasn't in Alice account evolved via IBC");
      }));
});
