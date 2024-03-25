const MiniMessage = artifacts.require("MiniMessage");

contract("MiniMessage", (accounts) => {
  it("should have evolved kadabra into alakazam in alice account on ibc0", () =>
  MiniMessage.deployed()
      .then((instance) => instance.balanceOf(accounts[0]))
      .then((mensajin) => {
        assert.equal(mensajin.valueOf(), "Alakazam", "alakazam wasn't in Alice account evolved via IBC");
      }));
});
