const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("StorageWithHistory.sol", () => {
    let contractFactory;
    let contract;
    let owner;
    let user1;
    let user2;
    let user1Address;
    let user2Address;

    beforeEach(async () => {
        [owner, user1, user2] = await ethers.getSigners();
        contractFactory = await ethers.getContractFactory("StorageWithHistory");
        contract = await contractFactory.deploy();
        user1Address = await user1.getAddress();
        user2Address = await user2.getAddress();
        ownerAddress = await owner.getAddress();
    });

    describe("Correct setup", () => {
        it("Should have correct deployed contract", async () => {
            let contractCode=await ethers.provider.getCode(contract.address);
            expect(contractCode).not.equal("0x");
        });
        it("should be named 'pocStorageWithHistory", async () => {
            const name = await contract.name();
            expect(name).to.equal("pocStorageWithHistory");
        });
        it("should have correct init value", async () => {
            const value = await contract.getValue();
            expect(value).to.equal(0);
        });
        it("should have correct init value", async () => {
            const historyLength = await contract.getHistoryLength();
            expect(historyLength).to.equal(0);
        });
    });

    describe("Core", () => {
        it("User1 set value", async () => {
            await contract.connect(user1).setValue(2);
            let value = await contract.getValue();
            expect(value).to.equal(2);
        });
        it("now history length must be 1", async () => {
            await contract.connect(user1).setValue(2);
            let historyLength = await contract.getHistoryLength();
            expect(historyLength).to.equal(1);
        });
        it("revert if history index doesn't exist", async () => {
            await expect(contract.getHistoryEntry(1)).to.be.revertedWith("History entry not exist");
        });
    });
});