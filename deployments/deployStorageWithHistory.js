
const main = async () => {

    const [deployer] = await ethers.getSigners();
    console.log(`Address deploying the contract --> ${deployer.address}`);

    const storageWithHistoryFactory = await ethers.getContractFactory("StorageWithHistory");
    const contract = await storageWithHistoryFactory.deploy();

    console.log(`StorageWithHistory contract address --> ${contract.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });