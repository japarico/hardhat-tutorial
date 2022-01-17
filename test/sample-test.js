const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const MyToken = await ethers.getContractFactory("MyToken");
    const mytoken = await MyToken.deploy("Robson", "Rob");
    await mytoken.deployed();

   // expect(await greeter.greet()).to.equal("Hello, world!");

   // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
   // await setGreetingTx.wait();

   // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
