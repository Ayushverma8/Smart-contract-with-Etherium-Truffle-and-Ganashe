// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// import { create } from "ipfs-http-client";
// import { AbortController } from "node-abort-controller";

// const client = create();

var Web3 = require("web3");

var callStoreOnLocalGanache = async function () {
  //let web3 = new Web3("http://localhost:7545");
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:7545/")
  );
  const accounts = await web3.eth.getAccounts();

  web3.eth.defaultAccount = accounts[0];
  console.log(web3.eth.defaultAccount);
  console.log(
    `Starting the transaction to process the agreement between buyer and the seller. `
  );
  var myContract = new web3.eth.Contract(abi, contractAddr, {
    from: web3.eth.defaultAccount,
  });
  console.log(myContract);
  // Setting up public and private keys here for the transaction
  // Setup done for the public an private key

  myContract.methods
    .getBuyerSignature_024()
    .call({ from: web3.eth.defaultAccount })
    .then(function (recippt) {
      console.log(
        "Retrieving the Transaction via the ganache NET",
        JSON.stringify(recippt, null, 4)
      );
    })
    .catch((error) => {
      console.log(error);
    });

  myContract.methods
    .setBuyerSignature_024("Ayush Verma 2 test")
    .call({ from: web3.eth.defaultAccount })
    .then(function (recippt) {
      console.log(
        "Submission of the Agreement is being processed via the ganache NET",
        JSON.stringify(recippt, null, 4)
      );
    })
    .catch((error) => {
      console.log(error);
    });
  myContract.methods
    .getSellerSignature_024()
    .call({ from: web3.eth.defaultAccount })
    .then(function (recippt) {
      console.log(
        "Retrieving the Transaction via the ganache NET",
        JSON.stringify(recippt, null, 4)
      );
    })
    .catch((error) => {
      console.log(error);
    });
  myContract.methods
    .setSellerSignature_024("Namaste")
    .call({ from: web3.eth.defaultAccount })
    .then(function (recippt) {
      console.log(
        "Retrieving the Transaction via the ganache NET",
        JSON.stringify(recippt, null, 4)
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

let contractAddr = "0x2900e8F6770797F060028bD89deB929345Ee09eC";
let abi = [
  {
    inputs: [],
    name: "buyerSignature_024",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "sellerSignature_024",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "seller_signature",
        type: "string",
      },
    ],
    name: "setSellerSignature_024",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSellerSignature_024",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "buyer_signature",
        type: "string",
      },
    ],
    name: "setBuyerSignature_024",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBuyerSignature_024",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];

callStoreOnLocalGanache()
  .then(() => {
    //   callRetrieveOnLocalGanache();
  })
  .catch((msg) => {
    console.log(msg);
  });
