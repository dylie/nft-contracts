require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

var privateKey = "869f5a8afc1332892fa5d70329a4dbd7a8f2c04a2c5e646fb53173f308943e77";


require('ts-node').register({
  files: true,
})

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    etho: {
        provider: () => new HDWalletProvider(privateKey, "https://rpc.ether1.org"),
        network_id: 1313114
    },
},

  compilers:{
    solc: {
      version: "^0.8.0"
  }
  },

  plugins: ['solidity-coverage'],

  etherscan: {
    apiKey: process.env.APIETHERSCAN,
  },
}
