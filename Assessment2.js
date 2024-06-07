// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {

    string public token_name = "Pawan";
    string public token_abbreviation = "pan";
    uint public totalSupply = 0;

    mapping(address => uint) public balances;

 
    function mint(address _add, uint values) public {
        totalSupply += values;
        balances[_add] += values;
    }

  
    function burn(address _add, uint values) public {
        if(balances[_add] >= values){
        totalSupply -= values;
        balances[_add] -= values;
    }
    }
}
