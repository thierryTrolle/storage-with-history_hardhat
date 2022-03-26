# Poc storage-with-history_hardhat 

This project is just a POC for deploy on Blockchain EVM compatible and test framework.

This project overwrite the old project [storage-with-history-solidity](https://github.com/thierryTrolle/storage-with-history-solidity).

Contract deployed on 

* Rinkeby : [see on etherscan](https://rinkeby.etherscan.io/address/0xF626c337e1f0E995bCB058F124F075E06f802172#code)

* Testnet matic mumbai : [see on polygonscan](https://mumbai.polygonscan.com/address/0x2e7fCc6744E574e1C76D1B37CC54872CdC018626#code)

## install and configure

* install dependencies
```sh
npm install
```

* create .env file 
```sh
touch .env 
```

* get api_key from [alchemy](https://www.alchemy.com/) of ethereum node.

* configure .env file:
```
PRIVATE_KEY = $PRIVATE_KEY FOR DEPLOYMENT 
URL_MUMBAI = https://polygon-mumbai.g.alchemy.com/v2/$API_ID
URL_RINKEBY = https://eth-rinkeby.alchemyapi.io/v2/$API_ID
ETHERSCAN_KEY = $API_ID
```

## Test
```sh
npx hardhat test
```

## Deploy
```sh
npx hardhat run deployments/deployStorageWithHistory.js --network mumbai
npx hardhat run deployments/deployStorageWithHistory.js --network rinkeby
```
## Verify and publish code on etherscan 
```sh
npx hardhat verify --network rinkeby 0x$CONTRACT_ADDRESS_DEPLOYED
```


