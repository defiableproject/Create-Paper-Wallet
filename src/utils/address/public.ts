import { Buffer } from '@/polyfills';
import { rmd160 } from '@/utils/address';

export function convertPublic_cosmos(publicBuf: Buffer, hrp = 'cosmos') {
    const AminoSecp256k1PubkeyPrefix = Buffer.from('EB5AE987', 'hex');
    const AminoSecp256k1PubkeyLength = Buffer.from('21', 'hex');

    publicBuf = Buffer.concat([ AminoSecp256k1PubkeyPrefix, AminoSecp256k1PubkeyLength, publicBuf ]);

    return libs.bech32.encode(hrp + 'pub', libs.bech32.toWords(publicBuf));
}

export function convertPublic_eos(publicBuf: Buffer) {
    const PUBLIC_PREFIX = 'EOS';

    const checksum = rmd160(publicBuf).digest('hex').slice(0, 8);

    publicBuf = Buffer.concat([ publicBuf, Buffer.from(checksum, 'hex') ]);

    return PUBLIC_PREFIX.concat(libs.bs58.encode(publicBuf));
}

export function convertPublic_fio(publicBuf: Buffer) {
    const PUBLIC_PREFIX = 'FIO';

    const checksum = rmd160(publicBuf).digest('hex').slice(0, 8);

    publicBuf = Buffer.concat([ publicBuf, Buffer.from(checksum, 'hex') ]);

    return PUBLIC_PREFIX.concat(libs.bs58.encode(publicBuf));
}

export function convertPublic_xwc(publicBuf: Buffer) {
    const PUBLIC_PREFIX = 'XWC';

    const checksum = rmd160(publicBuf).digest('hex').slice(0, 8);

    publicBuf = Buffer.concat([ publicBuf, Buffer.from(checksum, 'hex') ]);

    return PUBLIC_PREFIX.concat(libs.bs58.encode(publicBuf));
}
