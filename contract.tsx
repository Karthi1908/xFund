export const XFundAddress = ""

 export const XFundABI = ["function newChit(address[] memory _participants , uint _cycleCount, uint _frequency, uint _amount) public",
"function withdrawCycleAmount(uint _fundId, uint _cycleId) public",
"function makePayment(uint _fundId, uint _cycleId) public",
"function cycleWinner(uint _fundId) public",
"function checkForDefault(uint _fundId) public",
"function getIndexOfArray(address[] memory addressArray, address element) public pure returns(uint index)",
"function removeAddressFromQualified(uint _fundId, address element) public",
"event NewFund(uint indexed FundId,address[] Particpants,uint NumberOfCycles,uint AmountToBePaid,uint StartDate)"]






export const usdcContractAddress = ""
export const usdcContractABI = []
