require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stove cost mushroom evil install force force genuine'; 
let testAccounts = [
"0x10d8f13b17981c2fb6b400177cc8915162249fabb2b9f2272e26f19173558b61",
"0xac4d9ef45b219300e57766c573012fc9efc47fa97ed17c7c2c78a1b610a695bf",
"0xce75374ffd5b03a22540fdb513de2477aa40d56d91f5cf1602deefed5a67cb5a",
"0x3b97f3617fceb3cca5762acf37534823c864dcff7fbafeb8a07f03821a33c1c3",
"0x6bb8f3de70e5ebcb9c87ced0ef9d2a580856ad2210dd8163a98b1a54089bc4e1",
"0x1200e29d40e87fc28db41a8d6582d868eb34664d1a1e86ee74cdc3e6bc1cc831",
"0x21d9df63dfa69a2b84e9cc5f8c63faf4053e7206afbf59453cf17a1fccd193b0",
"0x7754b61a80bffa20d88fdcb2c7c43c735df141bd6dc53ad899bf2f82c884da22",
"0x00eb87c4bcb60a2b3b96a13c3a9155b065a2669ab7e191ec93cd026f51938501",
"0x211a091143fcf3fc0514924b1cbce72c812a6de3d3356facfeda397e5993d685"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


