const HGToken = artifacts.require("HGToken");
const HGTCrowdsale = artifacts.require("HGTCrowdsale");

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(HGToken, "HashGuideToken", "HGT", "100000000000000000000000000");
    const token = await HGToken.deployed();

    await deployer.deploy(HGTCrowdsale, 5, accounts[0], token.address);
    const crowdsale = await HGTCrowdsale.deployed();

    token.transfer(crowdsale.address, await token.totalSupply())
};