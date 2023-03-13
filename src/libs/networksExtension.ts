import { addNetwork, getNetwork } from '@/libs/networks';

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'bitcoin',
    name: 'BTC - Bitcoin',

    bip44: 0,
    vanityPrefix: [ '1' ],
});

addNetwork({
    ...getNetwork('testnet')!,
    alias: 'testnet',
    name: 'BTC - Bitcoin Testnet',

    bip44: 1,
    vanityPrefix: [ 'm', 'n' ],
});

addNetwork({
    alias: 'shadow',
    name: 'SDC - ShadowCash',

    bip44: 35,
    vanityPrefix: [ 'S' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0xEE80286A,
        private: 0xEE8031E8,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0xbf,
});

addNetwork({
    alias: 'shadowtn',
    name: 'SDC - ShadowCash Testnet',

    bip44: 1,
    vanityPrefix: [ 't' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x76C0FDFB,
        private: 0x76C1077A,
    },
    pubKeyHash: 0x7f,
    scriptHash: 0xc4,
    wif: 0xff,
});

addNetwork({
    alias: 'clam',
    name: 'CLAM - Clams',

    bip44: 23,
    vanityPrefix: [ 'x' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0xa8c26d64,
        private: 0xa8c17826,
    },
    pubKeyHash: 0x89,
    scriptHash: 0x0D,
    wif: 0x85,
});

addNetwork({
    alias: 'dash',
    name: 'DASH - Dash',

    bip44: 5,
    vanityPrefix: [ 'X' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc,
});

addNetwork({
    alias: 'maza',
    name: 'MAZA - Maza',

    bip44: 13,
    vanityPrefix: [ 'M' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x09,
    wif: 0xe0,
});

addNetwork({
    alias: 'dashtn',
    name: 'DASH - Dash Testnet',

    bip44: 1,
    vanityPrefix: [ 'y' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x8c,
    scriptHash: 0x13,
    wif: 0xef,
});

addNetwork({
    alias: 'game',
    name: 'GAME - GameCredits',

    bip44: 101,
    vanityPrefix: [ 'G' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x05,
    wif: 0xa6,
});

addNetwork({
    alias: 'namecoin',
    name: 'NMC - Namecoin',

    bip44: 7,
    vanityPrefix: [ 'M', 'N' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x34,
    scriptHash: 0x0D,
    wif: 0xb4,
});

addNetwork({
    alias: 'peercoin',
    name: 'PPC - Peercoin',

    bip44: 6,
    vanityPrefix: [ 'P' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x75,
    wif: 0xb7,
});

addNetwork({
    alias: 'axe',
    name: 'AXE - Axe',

    bip44: 4242,
    vanityPrefix: [ 'P' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x10, // TODO set this correctly
    wif: 0xcc,
});

addNetwork({
    alias: 'scribe',
    name: 'SCRIBE - Scribe',

    bip44: 545,
    vanityPrefix: [ 'R' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x7d,
    wif: 0x6e,
});

addNetwork({
    alias: 'slimcoin',
    name: 'SLM - Slimcoin',

    bip44: 63,
    vanityPrefix: [ 'S' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0xef6adf10,
        private: 0xef69ea80,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0x46,
});

addNetwork({
    alias: 'slimcointn',
    name: 'SLM - Slimcoin Testnet',

    bip44: 111,
    vanityPrefix: [ 'm', 'n' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x043587CF,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0x57,
});

addNetwork({
    alias: 'dogecoin',
    name: 'DOGE - Dogecoin',

    bip44: 3,
    vanityPrefix: [ 'D' ],

    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
        public: 0x02facafd,
        private: 0x02fac398,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e,
});

addNetwork({
    alias: 'dogecointestnet',
    name: 'DOGEt - Dogecoin Testnet',

    bip44: 1,
    vanityPrefix: [ 'n' ],

    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x71,
    scriptHash: 0xc4,
    wif: 0xf1,
});

addNetwork({
    alias: 'denarius',
    name: 'DNR - Denarius',

    bip44: 116,
    vanityPrefix: [ 'D' ],

    messagePrefix: '\x19Denarius Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x5a,
    wif: 0x9e,
});

addNetwork({
    alias: 'neblio',
    name: 'NEBL - Neblio',

    bip44: 146,
    vanityPrefix: [ 'N' ],

    messagePrefix: '\x18Neblio Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x70,
    wif: 0xb5,
});

addNetwork({
    alias: 'viacoin',
    name: 'VIA - Viacoin',

    bip44: 14,
    vanityPrefix: [ 'V' ],

    messagePrefix: '\x18Viacoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x21,
    wif: 0xc7,
});

addNetwork({
    alias: 'viacointestnet',
    name: 'VIA - Viacoin Testnet',

    bip44: 1,
    vanityPrefix: [ 't' ],

    messagePrefix: '\x18Viacoin Signed Message:\n',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x7f,
    scriptHash: 0xc4,
    wif: 0xff,
});

addNetwork({
    alias: 'jumbucks',
    name: 'JBS - Jumbucks',

    bip44: 26,
    vanityPrefix: [ 'J' ],

    messagePrefix: '\x19Jumbucks Signed Message:\n',
    bip32: {
        public: 0x037a689a,
        private: 0x037a6460,
    },
    pubKeyHash: 0x2b,
    scriptHash: 0x05,
    wif: 0xab,
});

addNetwork({
    alias: 'myriadcoin',
    name: 'XMY - Myriadcoin',

    bip44: 90,
    vanityPrefix: [ 'M' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x09,
    wif: 0xb2,
});

addNetwork({
    alias: 'bolivarcoin',
    name: 'BOLI - Bolivarcoin',

    bip44: 278,
    vanityPrefix: [ 'b' ],

    messagePrefix: 'Bolivarcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x55,
    scriptHash: 0x05,
    wif: 0xD5,
});

addNetwork({
    alias: 'onixcoin',
    name: 'ONX - Onixcoin',

    bip44: 174,
    vanityPrefix: [ 'X' ],

    messagePrefix: 'ONIX Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x4B,
    scriptHash: 0x05,
    wif: 0xCB,
});

addNetwork({
    alias: 'lkrcoin',
    name: 'LKR - Lkrcoin',

    bip44: 557,
    vanityPrefix: [ 'L' ],

    messagePrefix: '\x18LKRcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x55,
    wif: 0xB0,
});

addNetwork({
    alias: 'pivx',
    name: 'PIVX - PIVX',

    bip44: 119,
    vanityPrefix: [ 'D' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x022d2533,
        private: 0x0221312b,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x0d,
    wif: 0xd4,
});

addNetwork({
    alias: 'pivxtestnet',
    name: 'PIVX - PIVX Testnet',

    bip44: 1,
    vanityPrefix: [ 'x', 'y' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x3a8061a0,
        private: 0x3a805837,
    },
    pubKeyHash: 0x8b,
    scriptHash: 0x13,
    wif: 0xef,
});

addNetwork({
    alias: 'fix',
    name: 'FIX - FIX',

    bip44: 336,
    vanityPrefix: [ 'F' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x022d2533,
        private: 0x0221312b,
    },
    pubKeyHash: 0x23,
    scriptHash: 0x5F,
    wif: 0x3C,
});

addNetwork({
    alias: 'fixtestnet',
    name: 'FIX - FIX Testnet',

    bip44: 1,
    vanityPrefix: [ 'X' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x3a8061a0,
        private: 0x3a805837,
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x89,
    wif: 0xED,
});

addNetwork({
    alias: 'fujicoin',
    name: 'FJC - Fujicoin',

    bip44: 75,
    vanityPrefix: [ 'F' ],

    messagePrefix: '\x19FujiCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x24,
    scriptHash: 0x10,
    wif: 0xa4,
});

addNetwork({
    alias: 'nubits',
    name: 'USNBT - NuBits',

    bip44: 12,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18Nu Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x1a,
    wif: 0x96,
});

addNetwork({
    alias: 'bgold',
    name: 'BTG - Bitcoin Gold',

    bip44: 156,
    vanityPrefix: [ 'G' ],

    messagePrefix: '\x1DBitcoin Gold Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 38,
    scriptHash: 23,
    wif: 128,
});

addNetwork({
    alias: 'monacoin',
    name: 'MONA - Monacoin',

    bip44: 22,
    vanityPrefix: [ 'M' ],

    messagePrefix: '\x18Monacoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x37,
    wif: 0xb0,
});

addNetwork({
    alias: 'komodo',
    name: 'KMD - Komodo',

    bip44: 141,
    vanityPrefix: [ 'R' ],
    bip49available: false,

    messagePrefix: '\x18Komodo Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
});

addNetwork({
    alias: 'blackcoin',
    name: 'BLK - BlackCoin',

    bip44: 10,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18BlackCoin Signed Message:\n',
    bip32: {
        public: 0x02CFBEDE,
        private: 0x02CFBF60,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x55,
    wif: 0x99,
});

addNetwork({
    alias: 'beetlecoin',
    name: 'BEET - Beetlecoin',

    bip44: 800,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x19Beetlecoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1A,
    scriptHash: 0x55,
    wif: 0x99,
});

addNetwork({
    alias: 'adcoin',
    name: 'ACC - Adcoin',

    bip44: 161,
    vanityPrefix: [ 'A' ],

    messagePrefix: '\x18AdCoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x05,
    wif: 0xb0,
});

addNetwork({
    alias: 'asiacoin',
    name: 'AC - Asiacoin',

    bip44: 51,
    vanityPrefix: [ 'A' ],

    messagePrefix: '\x18AsiaCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x08,
    wif: 0x97,
});

addNetwork({
    alias: 'auroracoin',
    name: 'AUR - Auroracoin',

    bip44: 85,
    vanityPrefix: [ 'A' ],

    messagePrefix: '\x18AuroraCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x05,
    wif: 0x97,
});

addNetwork({
    alias: 'bata',
    name: 'BTA - Bata',

    bip44: 89,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18Bata Signed Message:\n',
    bip32: {
        public: 0xA40C86FA,
        private: 0xA40B91BD,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0xa4,
});

addNetwork({
    alias: 'belacoin',
    name: 'BELA - Belacoin',

    bip44: 73,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18BelaCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0x99,
});

addNetwork({
    alias: 'atom',
    name: 'BCA - Bitcoin Atom',

    bip44: 185,
    vanityPrefix: [ 'A' ],

    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x0a,
    wif: 0x80,
});

addNetwork({
    alias: 'bitcoinplus',
    name: 'XBC - Bitcoinplus',

    bip44: 65,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18BitcoinPlus Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x08,
    wif: 0x99,
});

addNetwork({
    alias: 'bitcloud',
    name: 'BTDX - BitCloud',

    bip44: 218,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18BitCloud Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0x99,
});

addNetwork({
    alias: 'bitcore',
    name: 'BTX - Bitcore',

    bip44: 160,
    vanityPrefix: [ '2' ],

    messagePrefix: '\x18BitCore Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x03,
    scriptHash: 0x7D,
    wif: 0x80,
});

addNetwork({
    alias: 'bitsend',
    name: 'BSD - Bitsend',

    bip44: 91,
    vanityPrefix: [ 'i' ],

    messagePrefix: '\x18Bitsend Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x66,
    scriptHash: 0x05,
    wif: 0xcc,
});

addNetwork({
    alias: 'britcoin',
    name: 'BRIT - Britcoin',

    bip44: 70,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18BritCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x55,
    wif: 0x99,
});

addNetwork({
    alias: 'canadaecoin',
    name: 'CDN - Canadaecoin',

    bip44: 34,
    vanityPrefix: [ 'C' ],

    messagePrefix: '\x18Canada eCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0x9c,
});

addNetwork({
    alias: 'cannacoin',
    name: 'CCN - Cannacoin',

    bip44: 19,
    vanityPrefix: [ 'C' ],

    messagePrefix: '\x18Cannacoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0x9c,
});

addNetwork({
    alias: 'cranepay',
    name: 'CRP - CranePay',

    bip44: 2304,
    vanityPrefix: [ 'C' ],

    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 28,
    scriptHash: 10,
    wif: 123,
});

addNetwork({
    alias: 'cryptoescudo',
    name: 'CESC - Cryptoescudo',

    bip44: 111,
    vanityPrefix: [ 'C' ],

    messagePrefix: '\x18Cryptoescudo Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0x9c,
});

addNetwork({
    alias: 'clubcoin',
    name: 'CLUB - Clubcoin',

    bip44: 79,
    vanityPrefix: [ 'C' ],

    messagePrefix: '\x18ClubCoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x55,
    wif: 0x99,
});

addNetwork({
    alias: 'compcoin',
    name: 'CMP - Compcoin',

    bip44: 71,
    vanityPrefix: [ 'C' ],

    messagePrefix: '\x18CompCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x55,
    wif: 0x9c,
});

addNetwork({
    alias: 'crave',
    name: 'CRAVE - Crave',

    bip44: 186,
    vanityPrefix: [ 'V' ],

    messagePrefix: '\x18DarkNet Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0x55,
    wif: 0x99,
});

addNetwork({
    alias: 'defcoin',
    name: 'DFC - Defcoin',

    bip44: 1337,
    vanityPrefix: [ 'D' ],

    messagePrefix: '\x18defcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x9e,
});

addNetwork({
    alias: 'diamond',
    name: 'DMD - Diamond',

    bip44: 152,
    vanityPrefix: [ 'd' ],

    messagePrefix: '\x18Diamond Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x5a,
    scriptHash: 0x08,
    wif: 0xda,
});

addNetwork({
    alias: 'digibyte',
    name: 'DGB - Digibyte',

    bip44: 20,
    vanityPrefix: [ 'D' ],

    messagePrefix: '\x19DigiByte Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x80,
});

addNetwork({
    alias: 'digitalcoin',
    name: 'DGC - Digitalcoin',

    bip44: 18,
    vanityPrefix: [ 'D' ],

    messagePrefix: '\x18Digitalcoin Signed Message:\n',
    bip32: {
        public: 0x9e0488B2,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x9e,
});

addNetwork({
    alias: 'divi',
    name: 'DIVI - DIVI',

    bip44: 301,
    vanityPrefix: [ 'D' ],

    messagePrefix: '\x19Divi Signed Message:\n',
    bip32: {
        public: 0x022d2533,
        private: 0x0221312b,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x0d,
    wif: 0xd4,
});

addNetwork({
    alias: 'divitestnet',
    name: 'DIVI - DIVI Testnet',

    bip44: 1,
    vanityPrefix: [ 'y' ],

    messagePrefix: '\x19Divi Signed Message:\n',
    bip32: {
        public: 0x3a8061a0,
        private: 0x3a805837,
    },
    pubKeyHash: 0x8b,
    scriptHash: 0x13,
    wif: 0xef,
});

addNetwork({
    alias: 'ecoin',
    name: 'ECN - Ecoin',

    bip44: 115,
    vanityPrefix: [ 'e' ],

    messagePrefix: '\x18eCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x5c,
    scriptHash: 0x14,
    wif: 0xdc,
});

addNetwork({
    alias: 'edrcoin',
    name: 'EDRC - Edrcoin',

    bip44: 56,
    vanityPrefix: [ 'e' ],

    messagePrefix: '\x18EDRcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x5d,
    scriptHash: 0x1c,
    wif: 0xdd,
});

addNetwork({
    alias: 'egulden',
    name: 'EFL - Egulden',

    bip44: 78,
    vanityPrefix: [ 'L' ],

    messagePrefix: '\x18Egulden Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x05,
    wif: 0xb0,
});

addNetwork({
    alias: 'einsteinium',
    name: 'EMC2 - Einsteinium',

    bip44: 41,
    vanityPrefix: [ 'E' ],

    messagePrefix: '\x18Einsteinium Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x05,
    wif: 0xa1,
});

addNetwork({
    alias: 'europecoin',
    name: 'ERC - Europecoin',

    bip44: 151,
    vanityPrefix: [ 'E' ],

    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x05,
    wif: 0xa8,
});

addNetwork({
    alias: 'exclusivecoin',
    name: 'EXCL - Exclusivecoin',

    bip44: 190,
    vanityPrefix: [ 'E' ],

    messagePrefix: '\x18ExclusiveCoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x89,
    wif: 0xa1,
});

addNetwork({
    alias: 'feathercoin',
    name: 'FTC - Feathercoin',

    bip44: 8,
    vanityPrefix: [ '6' ],

    messagePrefix: '\x18Feathercoin Signed Message:\n',
    bip32: {
        public: 0x0488BC26,
        private: 0x0488DAEE,
    },
    pubKeyHash: 0x0e,
    scriptHash: 0x05,
    wif: 0x8e,
});

addNetwork({
    alias: 'firo',
    name: 'FIRO - Firo (Zcoin rebrand)',

    bip44: 136,
    vanityPrefix: [ 'a' ],

    messagePrefix: '\x18Firo Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x52,
    scriptHash: 0x07,
    wif: 0xd2,
});

addNetwork({
    alias: 'zcoin',
    name: 'XZC - Zcoin (rebranded to Firo)',

    bip44: 136,
    vanityPrefix: [ 'a' ],

    messagePrefix: '\x18Zcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x52,
    scriptHash: 0x07,
    wif: 0xd2,
});

addNetwork({
    alias: 'firstcoin',
    name: 'FRST - Firstcoin',

    bip44: 167,
    vanityPrefix: [ 'F' ],

    messagePrefix: '\x18FirstCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x23,
    scriptHash: 0x05,
    wif: 0xa3,
});

addNetwork({
    alias: 'flashcoin',
    name: 'FLASH - Flashcoin',

    bip44: 120,
    vanityPrefix: [ 'U' ],

    messagePrefix: '\x18Flashcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x44,
    scriptHash: 0x82,
    wif: 0xc4,
});

addNetwork({
    alias: 'gcr',
    name: 'GCR - GCRCoin',

    bip44: 79,
    vanityPrefix: [ 'G' ],

    messagePrefix: '\x18GCR Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x61,
    wif: 0x9a,
});

addNetwork({
    alias: 'gobyte',
    name: 'GBX - Gobyte',

    bip44: 176,
    vanityPrefix: [ 'G' ],

    messagePrefix: '\x18DarkCoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x0a,
    wif: 0xc6,
});

addNetwork({
    alias: 'gridcoin',
    name: 'GRC - Gridcoin',

    bip44: 84,
    vanityPrefix: [ 'R', 'S' ], // TODO: review

    messagePrefix: '\x18Gridcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x3e,
    scriptHash: 0x55,
    wif: 0xbe,
});

addNetwork({
    alias: 'groestlcoin',
    name: 'GRS - Groestlcoin',

    bip44: 17,
    vanityPrefix: [ 'F' ],

    messagePrefix: '\x19GroestlCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 36,
    scriptHash: 5,
    wif: 128,
});

addNetwork({
    alias: 'groestlcointestnet',
    name: 'GRS - Groestlcoin Testnet',

    bip44: 1,
    vanityPrefix: [ 'm', 'n' ],

    messagePrefix: '\x19GroestlCoin Signed Message:\n',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
});

addNetwork({
    alias: 'gulden',
    name: 'NLG - Gulden',

    bip44: 87,
    vanityPrefix: [ 'G' ],

    messagePrefix: '\x18Guldencoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x62,
    wif: 0x62,
});

addNetwork({
    alias: 'helleniccoin',
    name: 'HNC - Helleniccoin',

    bip44: 168,
    vanityPrefix: [ 'L' ],

    messagePrefix: '\x18helleniccoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x05,
    wif: 0xb0,
});

addNetwork({
    alias: 'hempcoin',
    name: 'THC - Hempcoin',

    bip44: 113,
    vanityPrefix: [ 'H' ],

    messagePrefix: '\x18Hempcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x28,
    scriptHash: 0x08,
    wif: 0xa8,
});

addNetwork({
    alias: 'insane',
    name: 'INSN - Insane',

    bip44: 68,
    vanityPrefix: [ 'i' ],

    messagePrefix: '\x18INSaNe Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x66,
    scriptHash: 0x39,
    wif: 0x37,
});

addNetwork({
    alias: 'iop',
    name: 'IOP - Iop',

    bip44: 66,
    vanityPrefix: [ 'p' ],

    messagePrefix: '\x18IoP Signed Message:\n',
    bip32: {
        public: 0x2780915F,
        private: 0xAE3416F6,
    },
    pubKeyHash: 0x75,
    scriptHash: 0xae,
    wif: 0x31,
});

addNetwork({
    alias: 'ixcoin',
    name: 'IXC - Ixcoin',

    bip44: 86,
    vanityPrefix: [ 'x' ],

    messagePrefix: '\x18Ixcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x8a,
    scriptHash: 0x05,
    wif: 0x80,
});

addNetwork({
    alias: 'kobocoin',
    name: 'KOBO - Kobocoin',

    bip44: 196,
    vanityPrefix: [ 'F' ],
    bip49available: false,

    messagePrefix: '\x18Kobocoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x23,
    scriptHash: 0x1c,
    wif: 0xa3,
});

addNetwork({
    alias: 'landcoin',
    name: 'LDCN - Landcoin',

    bip44: 63,
    vanityPrefix: [ 'L' ],

    messagePrefix: '\x18Landcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x7a,
    wif: 0xb0,
});

addNetwork({
    alias: 'lbry',
    name: 'LBC - Library Credits',

    bip44: 140,
    vanityPrefix: [ 'b' ],

    messagePrefix: '\x18LBRYcrd Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x55,
    scriptHash: 0x7a,
    wif: 0x1c,
});

addNetwork({
    alias: 'linx',
    name: 'LINX - Linx',

    bip44: 114,
    vanityPrefix: [ 'X' ],

    messagePrefix: '\x18LinX Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x05,
    wif: 0xcb,
});

addNetwork({
    alias: 'litecoin',
    name: 'LTC - Litecoin',

    bip44: 2,
    vanityPrefix: [ 'L' ],

    messagePrefix: '\u0019Litecoin Signed Message:\n',
    bip32: {
        public: 27108450,
        private: 27106558,
    },
    pubKeyHash: 48,
    scriptHash: 50,
    wif: 176,
});

addNetwork({
    alias: 'litecointestnet',
    name: 'LTCt - Litecoin Testnet',

    bip44: 1,
    vanityPrefix: [ 'm', 'n' ],

    messagePrefix: '\x18Litecoin Signed Message:\n',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
});

addNetwork({
    alias: 'litecoincash',
    name: 'LCC - Litecoincash',

    bip44: 192,
    vanityPrefix: [ 'C' ],

    messagePrefix: '\x18Litecoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0xb0,
});

addNetwork({
    alias: 'lynx',
    name: 'LYNX - Lynx',

    bip44: 191,
    vanityPrefix: [ 'K' ],

    messagePrefix: '\x18Lynx Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x2d,
    scriptHash: 0x32,
    wif: 0xad,
});

addNetwork({
    alias: 'megacoin',
    name: 'MEC - Megacoin',

    bip44: 217,
    vanityPrefix: [ 'M' ],

    messagePrefix: '\x18Megacoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x05,
    wif: 0xB2,
});

addNetwork({
    alias: 'minexcoin',
    name: 'MNX - Minexcoin',

    bip44: 182,
    vanityPrefix: [ 'X' ],

    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x05,
    wif: 0x80,
});

addNetwork({
    alias: 'navcoin',
    name: 'NAV - Navcoin',

    bip44: 130,
    vanityPrefix: [ 'N' ],

    messagePrefix: '\x18Navcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x55,
    wif: 0x96,
});

addNetwork({
    alias: 'neoscoin',
    name: 'NEOS - Neoscoin',

    bip44: 25,
    vanityPrefix: [ 'N' ],

    messagePrefix: '\x18NeosCoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x05,
    wif: 0xb1,
});

addNetwork({
    alias: 'nix',
    name: 'NIX - NIX Platform',

    bip44: 400,
    vanityPrefix: [ 'G' ],

    messagePrefix: '\x18Nix Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x35,
    wif: 0x80,
});

addNetwork({
    alias: 'neurocoin',
    name: 'NRO - Neurocoin',

    bip44: 110,
    vanityPrefix: [ 'N' ],

    messagePrefix: '\x18PPCoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x75,
    wif: 0xb5,
});

addNetwork({
    alias: 'newyorkc',
    name: 'NYC - Newyorkc',

    bip44: 179,
    vanityPrefix: [ 'R' ],

    messagePrefix: '\x18newyorkc Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x16,
    wif: 0xbc,
});

addNetwork({
    alias: 'novacoin',
    name: 'NVC - Novacoin',

    bip44: 50,
    vanityPrefix: [ '4' ],

    messagePrefix: '\x18NovaCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x08,
    scriptHash: 0x14,
    wif: 0x88,
});

addNetwork({
    alias: 'nushares',
    name: 'NSR - Nushares',

    bip44: 11,
    vanityPrefix: [ 'S' ],

    messagePrefix: '\x18Nu Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x40,
    wif: 0x95,
});

addNetwork({
    alias: 'okcash',
    name: 'OK - Okcash',

    bip44: 69,
    vanityPrefix: [ 'P' ],

    messagePrefix: '\x18OKCash Signed Message:\n',
    bip32: {
        public: 0x03CC23D7,
        private: 0x03CC1C73,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x1c,
    wif: 0x03,
});

addNetwork({
    alias: 'omnicore',
    name: 'OMNI - Omnicore',

    bip44: 200,
    vanityPrefix: [ '1' ],

    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
});

addNetwork({
    alias: 'pesobit',
    name: 'PSB - Pesobit',

    bip44: 62,
    vanityPrefix: [ 'P' ],

    messagePrefix: '\x18Pesobit Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x55,
    wif: 0xb7,
});

addNetwork({
    alias: 'pinkcoin',
    name: 'PINK - Pinkcoin',

    bip44: 117,
    vanityPrefix: [ '2' ],

    messagePrefix: '\x18Pinkcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x03,
    scriptHash: 0x1c,
    wif: 0x83,
});

addNetwork({
    alias: 'poswcoin',
    name: 'POSW - POSWcoin',

    bip44: 47,
    vanityPrefix: [ 'P' ],

    messagePrefix: '\x18Poswcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x55,
    wif: 0xb7,
});

addNetwork({
    alias: 'potcoin',
    name: 'POT - Potcoin',

    bip44: 81,
    vanityPrefix: [ 'P' ],

    messagePrefix: '\x18Potcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x05,
    wif: 0xb7,
});

addNetwork({
    alias: 'putincoin',
    name: 'PUT - Putincoin',

    bip44: 122,
    vanityPrefix: [ 'P' ],

    messagePrefix: '\x18PutinCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x14,
    wif: 0xb7,
});

addNetwork({
    alias: 'ravencoin',
    name: 'RVN - Ravencoin',

    bip44: 175,
    vanityPrefix: [ 'R' ],

    messagePrefix: '\x16Raven Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x7a,
    wif: 0x80,
});

addNetwork({
    alias: 'reddcoin',
    name: 'RDD - Reddcoin',

    bip44: 4,
    vanityPrefix: [ 'R' ],

    messagePrefix: '\x18Reddcoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3d,
    scriptHash: 0x05,
    wif: 0xbd,
});

addNetwork({
    alias: 'revolutionvr',
    name: 'RVR - RevolutionVR',

    bip44: 129,
    vanityPrefix: [ 'V' ],

    messagePrefix: '\x18Voxels Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0x05,
    wif: 0xc6,
});

addNetwork({
    alias: 'ritocoin',
    name: 'RITO - Ritocoin',

    bip44: 19169,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x15Rito Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x69,
    wif: 0x8b,
});

addNetwork({
    alias: 'rsk',
    name: 'R-BTC - RSK',

    bip44: 137,
    vanityPrefix: [ '0x' ],

    messagePrefix: '\x18RSK Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    // TODO defaulting to Bitcoin value, check this
    pubKeyHash: 0x00,
    // TODO defaulting to Bitcoin value, check this
    scriptHash: 0x05,
    // TODO defaulting to Bitcoin value, check this
    wif: 0x80,
});

addNetwork({
    alias: 'rsktestnet',
    name: 'tR-BTC - RSK Testnet',

    bip44: 37310,
    vanityPrefix: [ '0x' ],

    messagePrefix: '\x18RSK Testnet Signed Message:\n',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
});

addNetwork({
    alias: 'rubycoin',
    name: 'RBY - Rubycoin',

    bip44: 16,
    vanityPrefix: [ 'R' ],

    messagePrefix: '\x18Rubycoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
});

addNetwork({
    alias: 'safecoin',
    name: 'SAFE - Safecoin',

    bip44: 19165,
    vanityPrefix: [ 'R' ],

    messagePrefix: '\x18Safecoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x3d,
    scriptHash: 0x56,
    wif: 0xbd,
});

addNetwork({
    alias: 'salus',
    name: 'SLS - Salus',

    bip44: 63,
    vanityPrefix: [ 'S' ],

    messagePrefix: '\x18Salus Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0xc4,
    wif: 0xbf,
});

addNetwork({
    alias: 'smileycoin',
    name: 'SMLY - Smileycoin',

    bip44: 59,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18Smileycoin Signed Message:\n',
    bip32: {
        public: 0x1E562D9A,
        private: 0x1E5631BC,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0x05,
});

addNetwork({
    alias: 'solarcoin',
    name: 'SLR - Solarcoin',

    bip44: 58,
    vanityPrefix: [ '8' ],

    messagePrefix: '\x18SolarCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x12,
    scriptHash: 0x05,
    wif: 0x92,
});

addNetwork({
    alias: 'stash',
    name: 'STASH - Stash',

    bip44: 0xC0C0,
    vanityPrefix: [ 'X' ],

    messagePrefix: '\x18Stash Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc,
});

addNetwork({
    alias: 'stashtn',
    name: 'STASH - Stash Testnet',

    bip44: 0xCAFE,
    vanityPrefix: [ 'y' ],

    messagePrefix: '\x18Stash Test Signed Message:\n',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x8c,
    scriptHash: 0x13,
    wif: 0xef,
});

addNetwork({
    alias: 'stratis',
    name: 'STRAT - Stratis',

    bip44: 105,
    vanityPrefix: [ 'S' ],

    messagePrefix: '\x18Stratis Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0xbf,
});

addNetwork({
    alias: 'stratistest',
    name: 'TSTRAT - Stratis Testnet',

    bip44: 105,
    vanityPrefix: [ 'T' ],

    messagePrefix: '\x18Stratis Test Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x41,
    scriptHash: 0x7d,
    wif: 0xbf,
});

addNetwork({
    alias: 'syscoin',
    name: 'SYS - Syscoin',

    bip44: 57,
    vanityPrefix: [ 'S' ],

    messagePrefix: '\x18Syscoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x05,
    wif: 0x80,
});

addNetwork({
    alias: 'toa',
    name: 'TOA - Toa',

    bip44: 159,
    vanityPrefix: [ 'T' ],

    messagePrefix: '\x18TOA Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x41,
    scriptHash: 0x17,
    wif: 0xc1,
});

addNetwork({
    alias: 'twins',
    name: 'TWINS - TWINS',

    bip44: 970,
    vanityPrefix: [ 'W' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x022d2533,
        private: 0x0221312b,
    },
    pubKeyHash: 0x49,
    scriptHash: 0x53,
    wif: 0x42,
});

addNetwork({
    alias: 'twinstestnet',
    name: 'TWINS - TWINS Testnet',

    bip44: 1,
    vanityPrefix: [ 'X' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x3a8061a0,
        private: 0x3a805837,
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x89,
    wif: 0xED,
});

addNetwork({
    alias: 'ultimatesecurecash',
    name: 'USC - Ultimatesecurecash',

    bip44: 112,
    vanityPrefix: [ 'U' ],

    messagePrefix: '\x18UltimateSecureCash Signed Message:\n',
    bip32: {
        public: 0xEE80286A,
        private: 0xEE8031E8,
    },
    pubKeyHash: 0x44,
    scriptHash: 0x7d,
    wif: 0xbf,
});

addNetwork({
    alias: 'unobtanium',
    name: 'UNO - Unobtanium',

    bip44: 92,
    vanityPrefix: [ 'u' ],

    messagePrefix: '\x18Unobtanium Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x82,
    scriptHash: 0x1e,
    wif: 0xe0,
});

addNetwork({
    alias: 'vcash',
    name: 'XVC - Vcash',

    bip44: 127,
    vanityPrefix: [ 'V' ],

    messagePrefix: '\x18Vcash Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x08,
    wif: 0xc7,
});

addNetwork({
    alias: 'verge',
    name: 'XVG - Verge',

    bip44: 77,
    vanityPrefix: [ 'D' ],

    messagePrefix: '\x18VERGE Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x21,
    wif: 0x9e,
});

addNetwork({
    alias: 'vertcoin',
    name: 'VTC - Vertcoin',

    bip44: 28,
    vanityPrefix: [ 'V' ],

    messagePrefix: '\x18Vertcoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x05,
    wif: 0x80,
});

addNetwork({
    alias: 'vivo',
    name: 'VIVO - Vivo',

    bip44: 166,
    vanityPrefix: [ 'V' ],

    messagePrefix: '\x18DarkCoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0x0a,
    wif: 0xc6,
});

addNetwork({
    alias: 'vpncoin',
    name: 'VASH - Vpncoin',

    bip44: 33,
    vanityPrefix: [ 'V' ],

    messagePrefix: '\x18VpnCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x05,
    wif: 0xc7,
});

addNetwork({
    alias: 'whitecoin',
    name: 'XWCC - Whitecoin Classic',

    bip44: 155,
    vanityPrefix: [ 'W' ],

    messagePrefix: '\x18Whitecoin Signed Message:\n',
    bip32: {
        public: 0x04887F1E,
        private: 0x048894ED,
    },
    pubKeyHash: 0x49,
    scriptHash: 0x57,
    wif: 0xc9,
});

addNetwork({
    alias: 'wincoin',
    name: 'WC - Wincoin',

    bip44: 181,
    vanityPrefix: [ 'W' ],

    messagePrefix: '\x18WinCoin Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x49,
    scriptHash: 0x1c,
    wif: 0xc9,
});

addNetwork({
    alias: 'xuez',
    name: 'XUEZ - Xuez',

    bip44: 225,
    vanityPrefix: [ 'X' ],
    segwitAvailable: false,

    messagePrefix: 'unused',
    bip32: {
        public: 0x022d2533,
        private: 0x0221312b,
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x12,
    wif: 0xd4,
});

addNetwork({
    alias: 'bitcoinprivate',
    name: 'BTCP - Bitcoin Private',

    bip44: 183,
    vanityPrefix: [ 'b1' ],

    messagePrefix: '\x18BitcoinPrivate Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1325,
    scriptHash: 0x13AF,
    wif: 0x80,
});

addNetwork({
    alias: 'bitcoinprivatetestnet',
    name: 'BTCPt - Bitcoin Private Testnet',

    bip44: 1,
    vanityPrefix: [ 'n1' ],

    messagePrefix: '\x18BitcoinPrivate Signed Message:\n',
    bip32: {
        public: 0x043587CF,
        private: 0x04358394,
    },
    pubKeyHash: 0x1957,
    scriptHash: 0x19E0,
    wif: 0xEF,
});

addNetwork({
    alias: 'bitcoinz',
    name: 'BTCZ - Bitcoinz',

    bip44: 177,
    vanityPrefix: [ 't1' ],

    messagePrefix: '\x18BitcoinZ Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1CB8,
    scriptHash: 0x1CBD,
    wif: 0x80,
});

addNetwork({
    alias: 'hush',
    name: 'HUSH - Hush (Legacy)',

    bip44: 197,
    vanityPrefix: [ 't1' ],

    messagePrefix: '\x18Hush Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1CB8,
    scriptHash: 0x1CBD,
    wif: 0x80,
});

addNetwork({
    alias: 'hush3',
    name: 'HUSH - Hush3',

    bip44: 197,
    vanityPrefix: [ 'R' ],

    messagePrefix: '\x18Hush Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3C,
    scriptHash: 0x55,
    wif: 0xBC,
});

addNetwork({
    alias: 'zclassic',
    name: 'ZCL - Zclassic',

    bip44: 133,
    vanityPrefix: [ 't1' ],

    messagePrefix: '\x18Zcash Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1CB8,
    scriptHash: 0x1CBD,
    wif: 0x80,
});

addNetwork({
    alias: 'zencash',
    name: 'ZEN - Horizen',

    bip44: 121,
    vanityPrefix: [ 'zn' ],

    messagePrefix: '\x18Zcash Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x2089,
    scriptHash: 0x2096,
    wif: 0x80,
});

addNetwork({
    alias: 'energi',
    name: 'NRG - Energi',

    bip44: 204,
    vanityPrefix: [ 'E' ],

    messagePrefix: 'DarkCoin Signed Message:\n',
    bip32: {
        public: 0x03B8C856,
        private: 0xD7DC6E9F,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x35,
    wif: 0x6a,
});

addNetwork({
    alias: 'exchangecoin',
    name: 'EXCC - ExchangeCoin',

    bip44: 0,
    vanityPrefix: [ '22' ],

    messagePrefix: 'ExchangeCoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x21B9,
    scriptHash: 0x34AF,
    wif: 0x80,
});

addNetwork({
    alias: 'artax',
    name: 'XAX - Artax',

    bip44: 219,
    vanityPrefix: [ 'A' ],

    messagePrefix: '\x18Artax Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x1CBD,
    wif: 0x97,
});

addNetwork({
    alias: 'bitcoingreen',
    name: 'BITG - Bitcoin Green',

    bip44: 222,
    vanityPrefix: [ 'G' ],

    messagePrefix: '\x18BitcoinGreen Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x1CBD,
    wif: 0x2E,
});

addNetwork({
    alias: 'anon',
    name: 'ANON - ANON',

    bip44: 220,
    vanityPrefix: [ 'An' ],

    messagePrefix: '\x18ANON Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x0582,
    scriptHash: 0x5389,
    wif: 0x80,
});

addNetwork({
    alias: 'projectcoin',
    name: 'PRJ - ProjectCoin',

    bip44: 533,
    vanityPrefix: [ 'P' ],

    messagePrefix: '\x18ProjectCoin Signed Message:\n',
    bip32: {
        public: 0x022D2533,
        private: 0x0221312B,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x08,
    wif: 0x75,
});

addNetwork({
    alias: 'phore',
    name: 'PHR - Phore',

    bip44: 444,
    vanityPrefix: [ 'P' ],

    messagePrefix: '\x18Phore Signed Message:\n',
    bip32: {
        public: 0x022D2533,
        private: 0x0221312B,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x0D,
    wif: 0xD4,
});

addNetwork({
    alias: 'blocknode',
    name: 'BND - Blocknode',

    bip44: 2941,
    vanityPrefix: [ 'B' ],

    messagePrefix: '\x18Blocknode Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x3F,
    wif: 0x4b,
});

addNetwork({
    alias: 'blocknode_testnet',
    name: 'tBND - Blocknode Testnet',

    bip44: 1,
    vanityPrefix: [ 'b' ],

    messagePrefix: '\x18Blocknode Testnet Signed Message:\n',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x55,
    scriptHash: 0x7d,
    wif: 0x89,
});

addNetwork({
    alias: 'litecoinz',
    name: 'LTZ - LitecoinZ',

    bip44: 221,
    vanityPrefix: [ 'L1' ],

    messagePrefix: '\x18LitecoinZ Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE3,
    },
    pubKeyHash: 0x0AB3,
    scriptHash: 0x0AB8,
    wif: 0x80,
});

addNetwork({
    alias: 'blockstamp',
    name: 'BST - BlockStamp',

    bip44: 254,
    vanityPrefix: [ '1' ],

    messagePrefix: '\x18BlockStamp Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
});

addNetwork({
    alias: 'deeponion',
    name: 'ONION - DeepOnion',

    bip44: 305,
    vanityPrefix: [ 'D' ],

    messagePrefix: 'x18DeepOnion Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1F,
    scriptHash: 0x4E,
    wif: 0x9F,
});

addNetwork({
    alias: 'cpuchain',
    name: 'CPU - CPUchain',

    bip44: 363,
    vanityPrefix: [ 'C' ],

    messagePrefix: 'x18CPUchain Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1C,
    scriptHash: 0x1E,
    wif: 0x80,
});

addNetwork({
    alias: 'wagerr',
    name: 'WGR - Wagerr',

    bip44: 7825266,
    vanityPrefix: [ 'W' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x022d2533,
        private: 0x0221312b,
    },
    pubKeyHash: 0x49,
    scriptHash: 0x3f,
    wif: 0xc7,
});

addNetwork({
    alias: 'bitcoinsv',
    name: 'BSV - BitcoinSV',

    bip44: 236,
    vanityPrefix: [ '1' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
});

addNetwork({
    alias: 'monkeyproject',
    name: 'MONK - Monkey Project',

    bip44: 214,
    vanityPrefix: [ 'M' ],

    messagePrefix: 'Monkey Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488dde4,
    },
    pubKeyHash: 0x33,
    scriptHash: 0x1c,
    wif: 0x37,
});

addNetwork({
    alias: 'rapids',
    name: 'RPD - Rapids',

    bip44: 320,
    vanityPrefix: [ 'R' ],

    messagePrefix: 'DarkNet Signed Message:\n',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x3d,
    scriptHash: 0x06,
    wif: 0x2e,
});

addNetwork({
    alias: 'aryacoin',
    name: 'ARYA - Aryacoin',

    bip44: 357,
    vanityPrefix: [ 'A' ],

    bech32: 'arya',
    messagePrefix: '\x18Aryacoin Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x6f,
    wif: 0x97,
});

addNetwork({
    alias: 'thought',
    name: 'THT - Thought',

    bip44: 1618,
    vanityPrefix: [ '3', '4' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0xFbC6A00D,
        private: 0x5AEBD8C6,
    },
    pubKeyHash: 0x07,
    scriptHash: 0x09,
    wif: 0x7B,
});

addNetwork({
    alias: 'sugarchain',
    name: 'SUGAR - Sugarchain',

    bip44: 408,
    vanityPrefix: [ 'S' ],

    messagePrefix: '\x18Sugarchain Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0x80,
});

addNetwork({
    alias: 'sugarchaintestnet',
    name: 'TUGAR - Sugarchain Testnet',

    bip44: 408,
    vanityPrefix: [ 'T' ],

    messagePrefix: '\x18Sugarchain Signed Message:\n',
    bip32: {
        public: 0x045f1cf6,
        private: 0x045f18bc,
    },
    pubKeyHash: 0x42,
    scriptHash: 0x80,
    wif: 0xef,
});

addNetwork({
    alias: 'regtest',
    name: 'BTC - Bitcoin RegTest',

    bip44: 1,
    vanityPrefix: [ 'm', 'n' ],

    bech32: 'bcrt',
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
});

addNetwork({
    alias: 'argoneum',
    name: 'AGM - Argoneum',

    bip44: 421,
    vanityPrefix: [ 'M' ],

    messagePrefix: 'unused',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x61,
    wif: 0xbf,
});

addNetwork({
    alias: 'particl',
    name: 'PART - Particl',

    bip44: 44,
    vanityPrefix: [ 'P' ],

    bech32: 'pw',
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
        public: 0x696e82d1,
        private: 0x8f1daeb8,
    },
    pubKeyHash: 0x38,
    scriptHash: 0x3c,
    wif: 0x6c,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'cosmos',
    name: 'ATOM - Cosmos Hub',

    bip44: 118,
    vanityPrefix: [ 'cosmos' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'binance',
    name: 'BSC - Binance Smart Chain',

    bip44: 60,
    vanityPrefix: [ '0x' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'callisto',
    name: 'CLO - Callisto',

    bip44: 820,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'casino',
    name: 'CSC - CasinoCoin',

    bip44: 359,
    vanityPrefix: [ 'cs' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'dexon',
    name: 'DXN - DEXON',

    bip44: 237,
    vanityPrefix: [ '0x' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'ellaism',
    name: 'ELLA - Ellaism',

    bip44: 163,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'eosio',
    name: 'EOS - EOSIO',

    bip44: 194,
    vanityPrefix: [ '' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'ethercore',
    name: 'ERE - EtherCore',

    bip44: 466,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'ethersocial',
    name: 'ESN - Ethersocial Network',

    bip44: 31102,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'etherclassic',
    name: 'ETC - Ethereum Classic',

    bip44: 61,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'ethereum',
    name: 'ETH - Ethereum',

    bip44: 60,
    vanityPrefix: [ '0x' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'energyweb',
    name: 'EWT - EnergyWeb',

    bip44: 246,
    vanityPrefix: [ '0x' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'expanse',
    name: 'EXP - Expanse',

    bip44: 40,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'fio',
    name: 'FIO - Foundation for Interwallet Operability',

    bip44: 235,
    vanityPrefix: [ '' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'starname',
    name: 'IOV - Starname',

    bip44: 234,
    vanityPrefix: [ 'star1' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'terra',
    name: 'LUNA - Terra',

    bip44: 330,
    vanityPrefix: [ 'terra1' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'mix',
    name: 'MIX - MIX',

    bip44: 76,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'moac',
    name: 'MOAC - MOAC',

    bip44: 314,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'musicoin',
    name: 'MUSIC - Musicoin',

    bip44: 184,
    vanityPrefix: [ '1' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'pirl',
    name: 'PIRL - Pirl',

    bip44: 164,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'poa',
    name: 'POA - Poa',

    bip44: 178,
    vanityPrefix: [ '0x' ],
    segwitAvailable: false,
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'thorchain',
    name: 'RUNE - THORChain',

    bip44: 931,
    vanityPrefix: [ 'thor1' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'jingtum',
    name: 'SWTC - Jingtum',

    bip44: 315,
    vanityPrefix: [ 'j' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'vechain',
    name: 'VET - VeChain',

    bip44: 818,
    vanityPrefix: [ '0x' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'ripple',
    name: 'XRP - Ripple',

    bip44: 144,
    vanityPrefix: [ 'r' ],
});

addNetwork({
    ...getNetwork('bitcoin')!,
    alias: 'xwc',
    name: 'XWC - Whitecoin',

    bip44: 559,
    vanityPrefix: [ 'XWC' ],
});
