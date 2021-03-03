const BeerTok = artifacts.require("./BeerTok.sol");

//test suite entry point
//Pass the contract, it promises passing all accounts in blockchain
contract(BeerTok, function (accounts) {

    var _instance;

    var seller = accounts[0]; //web3.eth.accounts[1]
    var buyer = accounts[1];

    var initialSupply = 500;
    var symbol = "BIR";

    it("Should be initialized correctly", function () {
        return BeerTok.deployed().then(function (instance) {
            return instance;
        }).then(function (data) {
            return data.symbol();
        }).then(function (res) {
            assert.equal(res, symbol, "Simbol should be correct");
        });
    });

    it("Should be initialized correctly", function () {
        return BeerTok.deployed().then(function (instance) {
            return instance.totalSupply();
        }).then(function (res) {
            assert.equal(res.toNumber(), initialSupply, "Total supply should be correct");
        });
    });

    it("Buyer should be poor", function () {
        return BeerTok.deployed().then(function (instance) {
            return instance.balanceOf(buyer);
        }).then(function (res) {
            assert.equal(res.toNumber(), 0, "res should be correct");
        });
    });

    it("Sell should work", function () {
        return BeerTok.deployed().then(function (instance) {
            _instance = instance;
            return _instance.transfer(buyer,2);
        }).then(function () {
            //after selling ask for sold beer
            return _instance.balanceOf(buyer);
        }).then(function (data) {
            assert.equal(data.toNumber(), 2, "Buyer should no more be poor");
        })
    });

})