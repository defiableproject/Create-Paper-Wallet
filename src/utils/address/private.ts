import { Buffer } from '@/polyfills';
import { decodeBaseX, sha256 } from '@/utils/address';

export function convertPrivate_casino(privateKey: string) {
    return decodeBaseX(privateKey).toString('hex').slice(2, 66);
}

export function convertPrivate_jingtum(privateKey: string) {
    return decodeBaseX(privateKey).toString('hex').slice(2, 66);
}

export function convertPrivate_ripple(privateKey: string) {
    return decodeBaseX(privateKey).toString('hex').slice(2, 66);
}

export function convertPrivate_eos(privateBuf: Buffer) {
    const PRIVATE_PREFIX = '80';

    privateBuf = Buffer.concat([ Buffer.from(PRIVATE_PREFIX, 'hex'), privateBuf ]);

    const hash = sha256(privateBuf).digest();
    const checksum = sha256(hash).digest('hex').slice(0, 8);

    privateBuf = Buffer.concat([ privateBuf, Buffer.from(checksum, 'hex') ]);

    return libs.bs58.encode(privateBuf);
}

export function convertPrivate_fio(privateBuf: Buffer) {
    const PRIVATE_PREFIX = '80';

    privateBuf = Buffer.concat([ Buffer.from(PRIVATE_PREFIX, 'hex'), privateBuf ]);

    const hash = sha256(privateBuf).digest();
    const checksum = sha256(hash).digest('hex').slice(0, 8);

    privateBuf = Buffer.concat([ privateBuf, Buffer.from(checksum, 'hex') ]);

    return libs.bs58.encode(privateBuf);
}

export function convertPrivate_xwc(privateBuf: Buffer) {
    const XWC_PRIVATE_PREFIX = '80';

    privateBuf = Buffer.concat([ Buffer.from(XWC_PRIVATE_PREFIX, 'hex'), privateBuf ]);

    const hash = sha256(privateBuf).digest();
    const checksum = sha256(hash).digest('hex').slice(0, 8);

    privateBuf = Buffer.concat([ privateBuf, Buffer.from(checksum, 'hex') ]);

    return libs.bs58.encode(privateBuf);
}
