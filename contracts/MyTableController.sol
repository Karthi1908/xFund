// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@tableland/evm/contracts/ITablelandController.sol";
import "@tableland/evm/contracts/policies/Policies.sol";

contract MyTableController is ITablelandController {
  function getPolicy(address sender)
      public
      payable
      override
      returns (ITablelandController.Policy memory)
  {

    /*
    * Add any custom ACL check here, like token ownership.
    */

    // Return allow-insert policy
    return
      ITablelandController.Policy({
        allowInsert: true,
        allowUpdate: false,
        allowDelete: false,
        whereClause: Policies.joinClauses(new string[](0)),
        withCheck: Policies.joinClauses(new string[](0)),
        updatableColumns: new string[](0)
      });
  }
}