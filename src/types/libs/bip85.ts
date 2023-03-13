import type { Network } from '@/types/libs/bitcoin';

interface bip85 {
    BIP85: BIP85Static;
}

export declare class BIP85 {
    // TODO: BIP32
    node: null;

    derive(path: string, bytesLength: number): string;
    deriveBIP39(language: LanguageValue, words: LengthValue, index: number): BIP85Child;
    deriveHex(bytes: number, index: number): BIP85Child;
    deriveWIF(index: number): BIP85Child;
    deriveXPRV(index: number): BIP85Child;
}

interface BIP85Static {
    fromBase58(base58: string, network?: Network): BIP85;
    fromEntropy(entropy: string, password?: string): BIP85;
    fromMnemonic(mnemonic: string, password?: string): BIP85;
    fromSeed(seed: Uint8Array, password?: string): BIP85;
}

export declare class BIP85Child {
    entropy: string;
    type: number;

    toEntropy(): string;
    toMnemonic(): string;
    toWIF(): string;
    toXPRV(): string;
}

export interface Application {
    value: ApplicationValue,
    label: string,
}

export type ApplicationValue = 'wif' | 'bip39' | 'hex' | 'Xprv'

export interface MnemonicLength {
    value: LengthValue,
    i18n: string,
}

export type LengthValue = 12 | 18 | 24

export type LanguageValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export default bip85;
