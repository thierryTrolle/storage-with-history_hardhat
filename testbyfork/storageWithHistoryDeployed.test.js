const { expect } = require("chai");
const { ethers } = require("hardhat");

const CONTRACT_ADDRESS = "0x2e7fCc6744E574e1C76D1B37CC54872CdC018626";

const ABI = [
    "function setValue(uint value) public",
    "function getValue() public view returns(uint)"
]

describe("test by mainFork", () => {

    let contractHistory;
    let account;

    beforeEach(async () => {
        [account] = await ethers.getSigners();
        console.log(await account.getAddress());
        contractHistory = new ethers.Contract(CONTRACT_ADDRESS, ABI, account);
    });

    it("Change and test value", async () => {
        let valueToSet=42;

        // to debug, if contract doesn't deploy, contractCode=0x
        // let contractCode=await ethers.provider.getCode(contractHistory.address);
        // console.log("code:"+contractCode);

        let oldValue = await contractHistory.getValue();
        expect(oldValue).not.equal(valueToSet);

        await contractHistory.connect(account).setValue(valueToSet);
        let value = await contractHistory.getValue();
        expect(value).to.equal(valueToSet);
    });
});