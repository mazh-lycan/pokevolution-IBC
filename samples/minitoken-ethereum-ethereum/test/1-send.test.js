const MiniMessage = artifacts.require("MiniMessage");

contract("MiniMessage", (accounts) => {
  it("should have sent kadabra through the IBC", async () => {
    const block = await web3.eth.getBlockNumber();
    MiniMessage.deployed()
      .then((instance) =>
        instance.getPastEvents("Cacneacall", {
          
          fromBlock: block,
        })
      )
      .then((evt) => {
        assert.equal(
          evt[0].args.amount.valueOf(),
          "",
          "kadabra wasn't sent from Alice account through the IBC"
        );
      });
  });
});
