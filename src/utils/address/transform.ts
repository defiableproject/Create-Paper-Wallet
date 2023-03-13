import { Buffer } from '@/polyfills';

import type { ECPair } from '@/types/libs/bitcoin';
import type { Address } from '@/libs/addresses';

import { getRskChainId } from '@/utils/networks';

import { hash160 } from '@/utils/address';
import { convertPublic_cosmos, convertPublic_eos, convertPublic_fio, convertPublic_xwc } from '@/utils/address/public';
import { convertAddress_casino, convertAddress_cosmos, convertAddress_jingtum, convertAddress_ripple, convertAddress_xwc, convertChecksumAddress_rsk } from '@/utils/address/address';
import { convertPrivate_casino, convertPrivate_eos, convertPrivate_fio, convertPrivate_jingtum, convertPrivate_ripple, convertPrivate_xwc } from '@/utils/address/private';

export type KeypairTransformer = (keypair: ECPair, hasPrivateKey: boolean, generatePublic?: boolean) => Address;

// TODO
function keypairToAddress(keypair: ECPair) {
    const pubBuff = keypair.getPublicKeyBuffer();
    const network = keypair.getNetwork();

    const hash = hash160(pubBuff);
    const version = network.pubKeyHash;

    const payload = Buffer.allocUnsafe(21);

    payload.writeUInt8(version, 0);
    hash.copy(payload, 1);

    // TODO: get lib from libs (bs58check.encode)
    throw '';
    return libs.bs58.encode(payload);
}

function keypairToPriv(keypair: ECPair, size?: number) {
    return keypair.d.toBuffer(size);
}

function keypairToPub(keypair: ECPair, encoding?: BufferEncoding) {
    return keypair.getPublicKeyBuffer().toString(encoding ?? 'hex');
}

export const transform_common: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const privateKey = hasPrivateKey ? keypair.toWIF() : 'NA';
    const publicKey = generatePublic ? keypairToPub(keypair) : 'NA';

    const address = keypair.getAddress().toString();

    return { privateKey, publicKey, address } as const;
};

export const transform_ethereum: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const publicBuffer = keypair.getPublicKeyBuffer();
    const ethPublic = libs.ethUtil.importPublic(publicBuffer);
    const addressBuffer = libs.ethUtil.publicToAddress(ethPublic);
    const hexAddress = addressBuffer.toString('hex');

    const checksumAddress = libs.ethUtil.toChecksumAddress(hexAddress);
    const address = libs.ethUtil.addHexPrefix(checksumAddress);

    const privateKey = hasPrivateKey ? libs.ethUtil.bufferToHex(keypairToPriv(keypair, 32)) : 'NA';
    const publicKey = generatePublic ? libs.ethUtil.addHexPrefix(keypairToPub(keypair)) : 'NA';

    return { privateKey, publicKey, address } as const;
};

export const transform_rsk: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const publicBuffer = keypair.getPublicKeyBuffer();
    const ethPublic = libs.ethUtil.importPublic(publicBuffer);
    const addressBuffer = libs.ethUtil.publicToAddress(ethPublic);
    const hexAddress = addressBuffer.toString('hex');

    const chainId = getRskChainId(keypair.network);

    const checksumAddress = convertChecksumAddress_rsk(hexAddress, chainId);
    const address = libs.ethUtil.addHexPrefix(checksumAddress);

    const privateKey = hasPrivateKey ? libs.ethUtil.bufferToHex(keypairToPriv(keypair)) : 'NA';
    const publicKey = generatePublic ? libs.ethUtil.addHexPrefix(keypairToPub(keypair)) : 'NA';

    return { privateKey, publicKey, address } as const;
};

export const transform_ripple: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    let { privateKey, publicKey, address } = transform_common(keypair, hasPrivateKey, generatePublic);

    privateKey = hasPrivateKey ? convertPrivate_ripple(privateKey) : 'NA';
    address = convertAddress_ripple(address);

    return { privateKey, publicKey, address } as const;
};

export const transform_jingtum: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    let { privateKey, publicKey, address } = transform_common(keypair, hasPrivateKey, generatePublic);

    privateKey = hasPrivateKey ? convertPrivate_jingtum(privateKey) : 'NA';
    address = convertAddress_jingtum(address);

    return { privateKey, publicKey, address } as const;
};

export const transform_casino: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    let { privateKey, publicKey, address } = transform_common(keypair, hasPrivateKey, generatePublic);

    privateKey = hasPrivateKey ? convertPrivate_casino(privateKey) : 'NA';
    address = convertAddress_casino(address);

    return { privateKey, publicKey, address } as const;
};

export const transform_eosio: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const privateKey = hasPrivateKey ? convertPrivate_eos(keypairToPriv(keypair, 32)) : 'NA';
    const publicKey = generatePublic ? convertPublic_eos(keypair.getPublicKeyBuffer()) : 'NA';

    const address = '';

    return { privateKey, publicKey, address } as const;
};

export const transform_fio: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const privateKey = hasPrivateKey ? convertPrivate_fio(keypairToPriv(keypair, 32)) : 'NA';
    const publicKey = generatePublic ? convertPublic_fio(keypair.getPublicKeyBuffer()) : 'NA';

    const address = '';

    return { privateKey, publicKey, address } as const;
};

export const transform_cosmos: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const hrp = 'cosmos';

    const privateKey = hasPrivateKey ? keypairToPriv(keypair).toString('base64') : 'NA';
    const publicKey = generatePublic ? convertPublic_cosmos(keypair.getPublicKeyBuffer(), hrp) : 'NA';

    const address = convertAddress_cosmos(keypair.getPublicKeyBuffer(), hrp);

    return { privateKey, publicKey, address } as const;
};

export const transform_thorchain: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const hrp = 'thor';

    const privateKey = hasPrivateKey ? keypairToPriv(keypair).toString('hex') : 'NA';
    const publicKey = generatePublic ? keypair.getPublicKeyBuffer().toString('hex') : 'NA';

    const address = convertAddress_cosmos(keypair.getPublicKeyBuffer(), hrp);

    return { privateKey, publicKey, address } as const;
};

export const transform_whitecoin: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const privateKey = hasPrivateKey ? convertPrivate_xwc(keypairToPriv(keypair, 32)) : 'NA';
    const publicKey = generatePublic ? convertPublic_xwc(keypair.getPublicKeyBuffer()) : 'NA';

    const address = convertAddress_xwc(keypair.getPublicKeyBuffer());

    return { privateKey, publicKey, address } as const;
};

export const transform_terra: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const hrp = 'terra';

    const privateKey = hasPrivateKey ? keypairToPriv(keypair).toString('hex') : 'NA';
    const publicKey = generatePublic ? keypair.getPublicKeyBuffer().toString('hex') : 'NA';

    const address = convertAddress_cosmos(keypair.getPublicKeyBuffer(), hrp);

    return { privateKey, publicKey, address } as const;
};

export const transform_starname: KeypairTransformer = (keypair, hasPrivateKey, generatePublic = true) => {
    const hrp = 'star';

    const privateKey = hasPrivateKey ? keypairToPriv(keypair).toString('base64') : 'NA';
    const publicKey = generatePublic ? convertPublic_cosmos(keypair.getPublicKeyBuffer(), hrp) : 'NA';

    const address = convertAddress_cosmos(keypair.getPublicKeyBuffer(), hrp);

    return { privateKey, publicKey, address } as const;
};
