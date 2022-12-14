# Smart-contract-with-Etherium-Truffle-and-Ganashe
Problem statement : 
Your task is to create a smart contract as per below specifications.

The smart contract is for a test Ethereum blockchain, such as Ropsten or Rinkeby. We recommend Rinkeby as you can
acquire ETH easier. You also need to create a Dapp (Distribute Application that uses blockchain smart contracts), wherein
the Dapp is a relatively simple skeleton of a part of a larger application.

Consider the following simple scenario involving three actors/participants. Actors involved include vendor, buyer, and a
notary. Buyer and seller negotiate an agreement, e.g., for a sale of a large and expensive piece of equipment. They agreed on
price and terms of delivery that were captured in a purchase agreement, which is submitted to the notary. Each of the buyer
and seller now needs to approve the document. To simplify, the smart contract needs to support the following:

• The smart contract if first created and given to the notary. The notary then invokes your smart contract method to
store the purchase agreement document, which is passed as a string. The method calculates the hash code of the
agreement and stores it and the agreement on the blockchain. The notary then notifies the buyer and seller that a
contract is ready for approval.
• Each of the buyer and a seller then:
• Retrieves the hash code and the agreement from the smart contract.
• It calculates the hash code of the retrieved document and compares it to the hash code retrieved from the
smart contract. If the hash codes do not match, it (buyer or seller) indicates cancellation of the agreement
by calling a smart contract method. If the hash codes match, then the actor reviews the contract and calls a
smart contract method to either approve or cancel the agreement.

(Note that, as the agreement is stored on the blockchain, its hash code is not required now. However, it
will be required in the following assignments.)
Smart contract methods

• submitAgreement … invoked by the notary to submit the agreement (agreement is represented by a string)
• retrieveAgreement … invoked by either the seller or buyer to retrieve the agreement and its hash code
• approveAgreement … invoked by either the seller or buyer to approve the agreement 


Table of Contents :
1. Introduction to the Approach
2. Development Enviornment
3. Deploying on the Test Rinkeby Platform Screenshots
4. WebUI using Parcel, Web3 and NodeJS Screenshots
5. References
Introduction
The approach followed the procedural algorithm where the smart contracts act as a notary and helps in a successful transaction. Below is the flow diagram which specifies the process followed :

![image](https://user-images.githubusercontent.com/15349623/184540182-87647cc6-377a-4c3c-be11-bbbf0dd8b960.png)

Environment and Assumptions
Development Environment
1. Visual Studio Code
2. Truffle CLI
3. Ganache GUI
4. MetaMask Chrome plugin
5. Rinkeby Test Ethers from TestNet
6. Etherscan
7. Infura Platform
8. Gitlab

Screenshots :

![image](https://user-images.githubusercontent.com/15349623/184540199-8a729ef8-d2bf-4d17-ad69-434a91274af4.png)

![image](https://user-images.githubusercontent.com/15349623/184540206-0caedab9-404f-4fbd-99fd-76ffeb85f6ff.png)

![image](https://user-images.githubusercontent.com/15349623/184540212-4a262fcd-020c-4878-854b-e8a3410e1ae0.png)

![image](https://user-images.githubusercontent.com/15349623/184540218-34a5a267-75b3-4199-8b52-45be53ff59a0.png)
![image](https://user-images.githubusercontent.com/15349623/184540224-a0d86a27-e35c-43f6-b602-1a654892175b.png)

![image](https://user-images.githubusercontent.com/15349623/184540234-82938ae2-47da-4f02-97ad-e400d5b38fd7.png)

![image](https://user-images.githubusercontent.com/15349623/184540243-45dabba5-f09b-43f4-9246-b48867017660.png)
![image](https://user-images.githubusercontent.com/15349623/184540254-3519c22e-1cf4-4b58-bdc5-d9666ba46878.png)
![image](https://user-images.githubusercontent.com/15349623/184540261-354d5261-0809-4ae3-a647-e779fa349ee1.png)
![image](https://user-images.githubusercontent.com/15349623/184540268-30be47ad-4c53-41cd-a543-31bc173f8c9d.png)
![image](https://user-images.githubusercontent.com/15349623/184540274-99a7df1c-3eff-4909-b830-dc4da3dadaf9.png)
![image](https://user-images.githubusercontent.com/15349623/184540281-6bd30038-3ab9-4f45-8064-e3ef77f9d06b.png)
![image](https://user-images.githubusercontent.com/15349623/184540285-1e3632cf-e729-4ed1-88ff-6c1e4fd8da0d.png)
![image](https://user-images.githubusercontent.com/15349623/184540288-60e31a6d-2aa1-4476-b5df-007dcebe465b.png)
![image](https://user-images.githubusercontent.com/15349623/184540291-c5ef7ef7-709a-4650-990d-be7ebce6e28f.png)
![image](https://user-images.githubusercontent.com/15349623/184540302-11cd90f1-c4f1-4fa3-9b16-d051f1f8a42f.png)
![image](https://user-images.githubusercontent.com/15349623/184540309-4685b7ab-a37b-407f-8deb-6ff5ed77db47.png)
![image](https://user-images.githubusercontent.com/15349623/184540319-25355315-6b1c-4805-bd89-4f02648f0050.png)



![image](https://user-images.githubusercontent.com/15349623/184540224-a0d86a27-e35c-43f6-b602-1a654892175b.png)
