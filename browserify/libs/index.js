/* base-x */
module.exports.basex = require('base-x');

/* base32 */
module.exports.base32 = require('base32.js');

/* bech32 */
module.exports.bech32 = require('bech32');

/* biginteger */
module.exports.BigInteger = require('javascript-biginteger');

/* bip85 */
module.exports.bip85 = require('bip85');

/* bitcoinjs-lib */
module.exports.bitcoin = require('bitcoinjs-lib');

/* ethereum-util */
module.exports.ethUtil = require('ethereumjs-util');

/* bs58 */
try {
    module.exports.bs58 = require('bs58');
} catch (e) {
    console.warn('Error loading bs58 library');
    console.warn(e);
}

/* create-hash */
try {
    module.exports.createHash = require('create-hash');
} catch (e) {
    console.warn('Error loading create-hash library');
    console.warn(e);
}
