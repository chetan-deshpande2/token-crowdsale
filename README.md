# ERC20 Token w/ Crowdsale (Initial Token Offering) Smart Contracts

## Description of repository

**NodeJS & TruffleSuite Project for writing smart contracts on binance smart chain in Solidity programming language for the Ethereum Virtual Machine. This is the code for an ERC20 Token && Crowdsale Smart contracts based on OpenZeppelin Contract Library.**

### How to run this project

- Open your bash terminal and set up your project directory by cloning the repo and installing dependencies needed.

```bash
git clone -b tutorial https://bitbucket.org/crypto-ist/bsc-crowdsale
cd bsc-crowdsale
npm install
```

- Change the values inside of `truffle-config.js` && `./migrations/2_deploy.js` to match your desired specified parameters. Consider revising your own version of this to include additional crowdsale methods by including additional OpenZeppelin Contract components such as; emissions or distribution controls.

- When you are ready to compile & deploy, run the commands below to do so.

```bash
truffle compile
truffle deploy --network bscTestnet #Use desired network from truffle-config.js
```

### Flatten smart contracts into single file for smart contract verification via block explorers

- within project's root directory using bash terminal. Replace values in example below with the filenames of your smart contracts within the `./contracts` directory.

```bash
mkdir ./flattened && npx truffle-flattener ./contracts/HGToken.sol > ./flattened/HGToken.sol.flat
```

- Check your `./flattened` folder for the single file of each contract within your `./contracts` directory. This combines all the imports within your smart contracts to allow for easier smart contract verification.

**_If you run into any issues, feel free to send me an email or join my Telegram channel where I try to help as many as I can, when I can. Thank you and don't forget to check out my YouTube @hashguide & website TheCryptoist.com & most of all, don't forget to share to the next person so we can further out reach!_**
