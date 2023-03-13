import { Buffer } from '@/polyfills';
import { decodeBaseX, rmd160, sha256, sha512, stripHexPrefix } from '@/utils/address/index';

export function convertAddress_casino(address: string) {
    const decoded = decodeBaseX(address);

    return libs.basex('cpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2brdeCg65jkm8oFqi1tuvAxyz').encode(decoded);
}

export function convertAddress_jingtum(address: string) {
    const decoded = decodeBaseX(address);

    return libs.basex('jpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65rkm8oFqi1tuvAxyz').encode(decoded);
}

export function convertAddress_ripple(address: string) {
    const decoded = decodeBaseX(address);

    return libs.basex('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz').encode(decoded);
}

export function convertAddress_cosmos(publicBuf: Buffer, hrp = 'cosmos') {
    const hash = sha256(publicBuf).digest();
    const hash2 = rmd160(hash).digest();

    return libs.bech32.encode(hrp, libs.bech32.toWords(hash2));
}

export function convertAddress_xwc(publicBuf: Buffer) {
    const ADDRESS_PREFIX = 'XWC';
    const NORMAL_ADDRESS_VERSION = '35';

    const hash = sha512(publicBuf).digest();
    const hash2 = rmd160(hash).digest();

    let addressBuffer = Buffer.concat([ Buffer.from(NORMAL_ADDRESS_VERSION, 'hex'), hash2 ]);
    const checksum = rmd160(addressBuffer).digest('hex').slice(0, 8);

    addressBuffer = Buffer.concat([ addressBuffer, Buffer.from(checksum, 'hex') ]);

    return ADDRESS_PREFIX.concat(libs.bs58.encode(addressBuffer));
}

export function convertChecksumAddress_rsk(address: string, chainId: number | null = null) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        throw new Error('Given address is not a valid RSK address: ' + address);
    }

    const stripAddress = stripHexPrefix(address).toLowerCase();
    const prefix = chainId ? chainId.toString() + '0x' : '';
    const keccakHash = libs.ethUtil.keccak256(prefix + stripAddress).toString('hex').replace(/^0x/i, '');

    let checksumAddress = '0x';

    for (let i = 0; i < stripAddress.length; i++) {
        let char = stripAddress[i];

        if (parseInt(keccakHash[i], 16) >= 8) {
            char = char.toUpperCase();
        }

        checksumAddress += char;
    }

    return checksumAddress;
}
