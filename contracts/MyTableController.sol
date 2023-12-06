// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {TablelandController} from "@tableland/evm/contracts/TablelandController.sol";
import {TablelandPolicy} from "@tableland/evm/contracts/TablelandPolicy.sol";
import {Policies} from "@tableland/evm/contracts/policies/Policies.sol";
contract UserProfileManager is TablelandController{
    


     function getPolicy(
    address caller,
    uint256 
  ) public payable override returns (TablelandPolicy memory) {
    // Return allow-all policy

    return
      TablelandPolicy({
        allowInsert: true,
        allowUpdate: true,
        allowDelete: true,
        whereClause: "",
        withCheck: "",
        updatableColumns: new string[](0)
      });

}
}