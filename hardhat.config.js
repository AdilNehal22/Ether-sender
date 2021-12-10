require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const ALCHEMY_API_KEY = "My Key";

 const Rinkeby_PRIVATE_KEY = "My Key";

module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${Rinkeby_PRIVATE_KEY}`]
    }
  }
};


