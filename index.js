var Web3 = require('web3');


var callStoreOnLocalGanache = async function () {
    // let web3 = new Web3("http://localhost:8545");
    const web3 = new Web3(Web3.givenProvider || "https://rinkeby.infura.io/v3/826733f43ac94c3cafd75bc3ac1467a4");
    const accounts = await web3.eth.requestAccounts();


    web3.eth.defaultAccount = accounts[0];
    console.log(web3.eth.defaultAccount);
    console.log(`Starting the transaction to process the agreement between buyer and the seller. `)
    var myContract = new web3.eth.Contract(abi, contractAddr, { from: web3.eth.defaultAccount })
    console.log(myContract);
    let num = 50;
    console.log(`The agreement is based between the Buyer and seller for the purchase of the Microsoft surface book bro with given maximum price.  `)

    myContract.methods.updateData(num)
        .send({ from: web3.eth.defaultAccount })
        .then(function (recippt) {
            console.log("Starting the transaction for the Notary", JSON.stringify(recippt, null, 4))
        }).
        catch(error => {
            console.log(error)
        }
        )
    myContract.methods.submitAgreement_024(num)
        .send({ from: web3.eth.defaultAccount })
        .then(function (recippt) {
            console.log("Submission of the Agreement is being processed via the Test NET", JSON.stringify(recippt, null, 4))
        }).
        catch(error => {
            console.log(error)
        }
        )
    myContract.methods.retrieveAgreement_024(num)
        .send({ from: web3.eth.defaultAccount })
        .then(function (recippt) {
            console.log("Retrieving the Transaction via the Test NET", JSON.stringify(recippt, null, 4))
        }).
        catch(error => {
            console.log(error)
        }
        )
    myContract.methods.approveAgreement_024(num)
        .send({ from: web3.eth.defaultAccount })
        .then(function (recippt) {
            console.log("Approving agreement based on the response of the Buyer and the Seller", JSON.stringify(recippt, null, 4))
        }).
        catch(error => {
            console.log(error)
        }
        )
}



let contractAddr = '0xc55FCcC0cD54DFB6ae1a3766e5bC18759E8cE175';
let abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "recordId",
                "type": "uint256"
            }
        ],
        "name": "NewRecordCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_data",
                "type": "uint256"
            }
        ],
        "name": "updateData",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "readData",
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
        "name": "submitAgreement024",
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
        "name": "retrieveAgreement024",
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
        "name": "approveAgreement024",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "recordId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "test_hash",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

callStoreOnLocalGanache().then(() => {
    //   callRetrieveOnLocalGanache();
})
    .catch(msg => {
        console.log(msg);
    });