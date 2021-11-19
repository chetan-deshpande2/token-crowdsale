//SPDX-License-Identifier: Unlicensed

pragma solidity >=0.5.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/crowdsale/Crowdsale.sol";

contract HGTCrowdsale is Crowdsale {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
    ) public Crowdsale(rate, wallet, token) {}
}