const BeerTok = artifacts.require("./BeerTok.sol");

module.exports = function (deployer) {
    //1 decimal, so 50 tokens will be created
    deployer.deploy(BeerTok,500);
}
