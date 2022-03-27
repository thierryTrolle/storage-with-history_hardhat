const { expect } = require("chai");
const { ethers } = require("hardhat");

const CONTRACT_ADDRESS = "0xF626c337e1f0E995bCB058F124F075E06f802172";

const ABI = [
    "function setValue(uint value) public",
    "function getValue() public view returns(uint)"
]

describe("test by mainFork", () => {

    let contractCode;
    let contractHistory;
    let account;

    before(async () => {
        [account] = await ethers.getSigners();
        console.log(await account.getAddress());
        contractHistory = new ethers.Contract(CONTRACT_ADDRESS, ABI, account);
        contractCode = await contractHistory;
    });

    it("Change and test value", async () => {
        let valueToSet=42;
        console.log("code:"+contractCode);
        console.log("wi");
        let oldValue = await contractHistory.getValue();
        expect(oldValue).to.equal(valueToSet);

        await contractCode.setValue(valueToSet);
        let value = await contractCode.getValue();
        expect(value).to.equal(valueToSet);
    });
});
