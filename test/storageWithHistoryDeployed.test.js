const { expect } = require("chai");
const { ethers } = require("hardhat");

const CONTRACT_ADDRESS = "0xF626c337e1f0E995bCB058F124F075E06f802172";

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
        let contractCode=await ethers.provider.getCode(contractHistory.address);
        console.log("code:"+contractCode);
        console.log("wi");
        let oldValue = await contractHistory.getValue();
        expect(oldValue).to.equal(valueToSet);

        await contractHistory.connect(account).setValue(valueToSet);
        let value = await contractHistory.getValue();
        expect(value).to.equal(valueToSet);
    });
});