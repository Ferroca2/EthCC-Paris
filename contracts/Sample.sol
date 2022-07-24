//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Sample{
    string message;

     constructor(string memory _startMessage) {
        message= _startMessage;
    }

    function update(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns(string memory){
        return message;
    }
}