require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remind provide grace nation force gather'; 
let testAccounts = [
"0x303210a255b600a6f0cd552ee56a26db973643d50f175ebed0f1cf83fda9d49e",
"0x194ebc6ffce90dff57600b36ec9e51d490b7f3d3c5e761ee7f85294652746949",
"0x52c42aba4caa2cef753d2f6c7045547fca5a55469d4d826bca2c88f6be55cb07",
"0xb118195e471afc5b48c7d31c496b3a7f699dc919d85754453dd3a65ea77fb49e",
"0x438538599048a4c69b7bbc7ba5c24a1b91d81ba5be864b1c08e4432b226e4c84",
"0x944c1dcf1ebc2b7fa4d1d84d1572920513f0953f32387bdadcab22186cbfd2ff",
"0x4dc75a4de78fbf84f9a253469365334ba8476e79b585a215878c19a65095453c",
"0x08badd8b2bc67f952ef01b63f10a466e4af94f3393c5059176b23f4ef5e5e670",
"0x8cb0fce3c2a1c9a63c114e752613509507bdcd352f9b496a88e2bbf07d862992",
"0xd2f43d7e72d77b3e6b2a0365e2a2d7b28b239e0705ca6f3e6a1b60cb7cf8361c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

