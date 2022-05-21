// Solidity program to demonstrate
// function declaration
pragma solidity ^0.8.13;

// Creating a contract
contract BuyerSellerNotart024 {
    // This justifies the agreement that will be taken between the parties. In this case I am limiting the parties to two but it could be N in the number.
    string agreement024 =
        "This agreement is about purchase of a Microsoft Surface book Pro from the Halifax Shopping Center on June 14, 2022. ";

    // Hash of the string that this record is protecting
    uint256 hash_agreement024;

    // Store acknowledgment of this record by the party
    mapping(address => bool) parties_approvals024;

    // Store the timestamp of record creation
    uint256 createdAt024;

    // Record is valid if now < validUntil
    uint256 validUntil024;

    /*
    Records counter, unique ID for every record
*/
    uint256 private currentId024;

    // Indicate which address is party on this record
    address[] parties;

    event NewRecordCreated(uint256 recordId);

    uint256 data;

    function updateData(uint256 _data) external {
        data = _data;
    }

    function readData() external view returns (uint256) {
        return data;
    }

    modifier onlyParty(uint256 recordId) {
        // Iterate over parties and check if there sender of the
        // message is a party on this record
        for (uint256 i = 0; i < parties.length; i++) {
            if (parties[i] == msg.sender) {
                _;
                return;
            }
        }
        // If sender is not party on this record, revert
        revert();
    }

    // Defining function to calculate sum of 2 numbers
    function submitAgreement024() public view returns (uint256) {
        uint256 num1 = 10;
        uint256 num2 = 16;
        uint256 sum = num1 + num2;
        return sum;
    }
}
