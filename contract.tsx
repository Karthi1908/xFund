export const XFundAddress = "0xd9E4F98fd967449bAc59C8666Be0cBDA2ea9ba07"

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



export const creditScoreAddress = "0xa1A12162204A28b9e76Fcebd4066EFeC6C44B611"
export const creditScoreABI = [
    "function balanceOf(address owner) external view returns (uint256)",
    "function ownerOf(uint256 tokenId) external view returns (address)",
    "function approve(address to, uint256 tokenId) external",
    "function getApproved(uint256 tokenId) external view returns (address)",
    "function setApprovalForAll(address operator, bool approved) external",
    "function isApprovedForAll(address owner, address operator) external view returns (bool)",
    "function transferFrom(address from, address to, uint256 tokenId) external",
    "function safeTransferFrom(address from, address to, uint256 tokenId) external",
    "function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) external",
    "function totalSupply() external view returns (uint256)",
    "function tokenByIndex(uint256 index) external view returns (uint256)",
    "function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)",
    "function tokenURI(uint256 _tokenId) public view virtual override returns (string memory)"

  ]


export const usdcContractAddress = "0x03f6D79DC9B64bcC762Bd8c1256B9619492A398C"
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
