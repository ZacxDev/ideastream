pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "./Idea.sol";

contract Ideas {
    mapping (uint => address) public owners;
    uint public lastId;

    event Withdrawal(uint amount, uint when);
    event IdeaCreated(uint id);

    constructor() payable {
    }

    /*
    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
    */

    function create(Idea memory idea) public {
        lastId++;
        idea.id = lastId;

        emit IdeaCreated(idea.id);
    }
}

