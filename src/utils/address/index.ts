import { Network } from '@/types/libs/bitcoin';

import { isCasino, isCosmos, isEosio, isEthereum, isFio, isJingtum, isRipple, isRsk, isStarname, isTerra, isThorchain, isWhitecoin } from '@/utils/networks';
import { transform_casino, transform_common, transform_cosmos, transform_eosio, transform_ethereum, transform_fio, transform_jingtum, transform_ripple, transform_rsk, transform_starname, transform_terra, transform_thorchain, transform_whitecoin } from '@/utils/address/transform';

export const ALPHANUM_BASE_X = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

export const sha256 = (data: Buffer | string) => libs.createHash('sha256').update(data);
export const sha512 = (data: Buffer | string) => libs.createHash('sha512').update(data);
export const rmd160 = (data: Buffer | string) => libs.createHash('rmd160').update(data);

export const hash160 = (data: Buffer | string) => rmd160(sha256(data).digest()).digest();

export const decodeBaseX = (baseX: string, alphabet?: string) => libs.basex(alphabet ?? ALPHANUM_BASE_X).decode(baseX);

export function stripHexPrefix(address: string) {
    const hasPrefix = (address.substring(0, 2) === '0x' || address.substring(0, 2) === '0X');

    return hasPrefix ? address.slice(2) : address;
}

export function getAddressTransformer(network: Network) {
    if (isEthereum(network)) {
        return transform_ethereum;
    } else if (isRsk(network)) {
        return transform_rsk;
    } else if (isRipple(network)) {
        return transform_ripple;
    } else if (isJingtum(network)) {
        return transform_jingtum;
    } else if (isCasino(network)) {
        return transform_casino;
    } else if (isEosio(network)) {
        return transform_eosio;
    } else if (isFio(network)) {
        return transform_fio;
    } else if (isCosmos(network)) {
        return transform_cosmos;
    } else if (isThorchain(network)) {
        return transform_thorchain;
    } else if (isWhitecoin(network)) {
        return transform_whitecoin;
    } else if (isTerra(network)) {
        return transform_terra;
    } else if (isStarname(network)) {
        return transform_starname;
    }

    return transform_common;
}
