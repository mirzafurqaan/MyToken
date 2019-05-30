pragma solidity >=0.4.21 <0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";

contract MyToken is StandardToken, DetailedERC20{
    constructor(string memory _name, string memory _symbol,uint8 _decimals) 
    DetailedERC20(_name, _symbol, _decimals)
    public{

    }

}