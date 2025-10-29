const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying with account:", deployer.address);

    const initialSupply = hre.ethers.parseUnits("1000000", 18);
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy("MyToken", "MTK", initialSupply);

    await token.deployed();
    console.log("MyToken deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
