# BeerTok an ERC20 token 
Creation of an Ethereum ERC20 token step-by-step.

Main use case (ICO):
* Customer pays smart contract (we wil develop)
* Contract robot will send payment to contract owner
* Contract robot send coin to customer 

# Steps

* Create a wallet on metamask (BeerTok wallet) and connect to Ropstein Test Network. In this wallet we create and customize the new token.
* Request some ETH from https://faucet.metamask.io/
* Go to https://remix.ethereum.org/
  - Upload BeerTok.sol
  - Activate solidity compiler and compile contract
  - Deploy using injected web3. Initial supply will be sent to contract deployer
  - Write down address of contract, you'll use it in order to import new token in your wallet

# Testing
We will use temporary develop node provided by truffle:
```
truffle test
```

# Manual Testing
We will use temporary develop node provided by truffle:
```
truffle develop

migrate --compile-all --reset
BeerTok.address
BeerTok.deployed().then(function(instance) {app=instance});
app.balanceOf(web3.eth.accounts[0]);
app.balanceOf(web3.eth.accounts[1]);
app.transfer(web3.eth.accounts[1],2);
app.balanceOf(web3.eth.accounts[0]);
app.balanceOf(web3.eth.accounts[1]);
```