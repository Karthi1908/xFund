export const XFundAddress = "0x6BC7eccc559Da4b65b7c53a6f85Fd39951D9A2C8"

 export const XFundABI = ["function newChit(address[] memory _participants , uint _cycleCount, uint _frequency, uint _amount) public",
"function withdrawCycleAmount(uint _fundId, uint _cycleId) public",
"function makePayment(uint _fundId, uint _cycleId) public",
"function cycleWinner(uint _fundId) public",
"function checkForDefault(uint _fundId) public",
"function getIndexOfArray(address[] memory addressArray, address element) public pure returns(uint index)",
"function removeAddressFromQualified(uint _fundId, address element) public",
"event NewFund(uint indexed FundId,address[] Particpants,uint NumberOfCycles,uint AmountToBePaid,uint StartDate)",
"event PaymentMade (uint indexed FundId,uint indexed CycleId,address indexed Payer,uint AmountPaid)",
"event AmountDisbursed(uint indexed FundId,uint indexed CycleId,address indexed withdrawer,uint TotalAmountDrawn,uint CurrentAmountDrawn)"]






export const usdcContractAddress = "0x2A1761AA41Db546E9EA08Da411F1430f2e2d3fdC"
export const usdcContractABI =
[
   {
       "inputs": [],
       "stateMutability": "nonpayable",
       "type": "constructor"
   },
   {
       "anonymous": false,
       "inputs": [
           {
               "indexed": true,
               "internalType": "address",
               "name": "owner",
               "type": "address"
           },
           {
               "indexed": true,
               "internalType": "address",
               "name": "spender",
               "type": "address"
           },
           {
               "indexed": false,
               "internalType": "uint256",
               "name": "value",
               "type": "uint256"
           }
       ],
       "name": "Approval",
       "type": "event"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "spender",
               "type": "address"
           },
           {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
           }
       ],
       "name": "approve",
       "outputs": [
           {
               "internalType": "bool",
               "name": "",
               "type": "bool"
           }
       ],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "from",
               "type": "address"
           },
           {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
           }
       ],
       "name": "burnUSDC",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "spender",
               "type": "address"
           },
           {
               "internalType": "uint256",
               "name": "subtractedValue",
               "type": "uint256"
           }
       ],
       "name": "decreaseAllowance",
       "outputs": [
           {
               "internalType": "bool",
               "name": "",
               "type": "bool"
           }
       ],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "spender",
               "type": "address"
           },
           {
               "internalType": "uint256",
               "name": "addedValue",
               "type": "uint256"
           }
       ],
       "name": "increaseAllowance",
       "outputs": [
           {
               "internalType": "bool",
               "name": "",
               "type": "bool"
           }
       ],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "to",
               "type": "address"
           },
           {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
           }
       ],
       "name": "mintUSDC",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "anonymous": false,
       "inputs": [
           {
               "indexed": true,
               "internalType": "address",
               "name": "previousOwner",
               "type": "address"
           },
           {
               "indexed": true,
               "internalType": "address",
               "name": "newOwner",
               "type": "address"
           }
       ],
       "name": "OwnershipTransferred",
       "type": "event"
   },
   {
       "inputs": [],
       "name": "renounceOwnership",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "_minter",
               "type": "address"
           }
       ],
       "name": "setMinter",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "to",
               "type": "address"
           },
           {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
           }
       ],
       "name": "transfer",
       "outputs": [
           {
               "internalType": "bool",
               "name": "",
               "type": "bool"
           }
       ],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "anonymous": false,
       "inputs": [
           {
               "indexed": true,
               "internalType": "address",
               "name": "from",
               "type": "address"
           },
           {
               "indexed": true,
               "internalType": "address",
               "name": "to",
               "type": "address"
           },
           {
               "indexed": false,
               "internalType": "uint256",
               "name": "value",
               "type": "uint256"
           }
       ],
       "name": "Transfer",
       "type": "event"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "from",
               "type": "address"
           },
           {
               "internalType": "address",
               "name": "to",
               "type": "address"
           },
           {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
           }
       ],
       "name": "transferFrom",
       "outputs": [
           {
               "internalType": "bool",
               "name": "",
               "type": "bool"
           }
       ],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "newOwner",
               "type": "address"
           }
       ],
       "name": "transferOwnership",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "owner",
               "type": "address"
           },
           {
               "internalType": "address",
               "name": "spender",
               "type": "address"
           }
       ],
       "name": "allowance",
       "outputs": [
           {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
           }
       ],
       "stateMutability": "view",
       "type": "function"
   },
   {
       "inputs": [
           {
               "internalType": "address",
               "name": "account",
               "type": "address"
           }
       ],
       "name": "balanceOf",
       "outputs": [
           {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
           }
       ],
       "stateMutability": "view",
       "type": "function"
   },
   {
       "inputs": [],
       "name": "decimals",
       "outputs": [
           {
               "internalType": "uint8",
               "name": "",
               "type": "uint8"
           }
       ],
       "stateMutability": "view",
       "type": "function"
   },
   {
       "inputs": [],
       "name": "name",
       "outputs": [
           {
               "internalType": "string",
               "name": "",
               "type": "string"
           }
       ],
       "stateMutability": "view",
       "type": "function"
   },
   {
       "inputs": [],
       "name": "owner",
       "outputs": [
           {
               "internalType": "address",
               "name": "",
               "type": "address"
           }
       ],
       "stateMutability": "view",
       "type": "function"
   },
   {
       "inputs": [],
       "name": "symbol",
       "outputs": [
           {
               "internalType": "string",
               "name": "",
               "type": "string"
           }
       ],
       "stateMutability": "view",
       "type": "function"
   },
   {
       "inputs": [],
       "name": "totalSupply",
       "outputs": [
           {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
           }
       ],
       "stateMutability": "view",
       "type": "function"
   }
]
