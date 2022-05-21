// Solidity program to demonstrate
// function declaration
pragma solidity ^0.8.13;

// Creating a contract
contract BuyerSellerNotary024 {
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

    // Defining function submit the agreement onto the main netwwork
    function submitAgreement024() public view returns (uint256) {
        // Verify that the msg sender is available in the network and we have access to the msg sender variable
        if (parties[0] == msg.sender && msg.gas < 200000) {
            return 1;
        } else {
            // If message sender is not found we have to revert the transaction.
            revert();
        }
        /*
        Only valid records can be accesed
    */
        bytes memory tempEmptyStringTest = bytes(agreement024);
        if (hash_agreement024 != 0) {
            return 1;
            // Agreement found and is accurate to level of the requirements
        } else {
            revert();
            // No agreement found on the network
        }
    }

    function retrieveAgreement024() public view returns (uint256) {
        if (hash_agreement024 != 0) {
            return (hash_agreement024);
        }
    }

    // Store acknowledgment of this record by the party
    mapping(address => bool) parties_approvals;

    function approveAgreement024()
        public
        view
        returns (
            uint256,
            uint256 recordId,
            uint256 test_hash
        )
    {
        // Iterate over all parties associated with this record and check for
        // their approval
        for (uint256 i = 0; i < parties.length; i++) {
            if (parties_approvals[parties[i]] == false) {
                // If one of the parties didn't approve this record, revert
                revert();
            }
        }

        // Compare testing hash with the recorded hash
        if (test_hash == hash_agreement024) {
            approveAgreement024();
        } else {
            revert();
        }
        for (uint256 i = 0; i < parties.length; i++) {
            if (currentId024 == 0 && data == 0) {
                // If one of the parties didn't approve this record, revert
            } else {
                revert();
            }
        }
    }
}
