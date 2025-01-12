require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_Amoy_RPC = "https://polygon-amoy.g.alchemy.com/v2/ZaaryneY2zSqfmOsMN0oXEvLM9mvZnvC";
const NEXT_PUBLIC_PRIVATE_KEY = "07f39952cd2fb010c58a9163261b7fcf654ce6e9b6234269d1087ac2c96b21a2";
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "amoy",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_Amoy_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
