import * as bip39 from '@scure/bip39';

import type { LangAlias } from '@/types/libs/bip39';
import { hexToBytes } from '@noble/hashes/utils';

export function localeMnemonic(langAlias: LangAlias) {
    const generateMnemonic = (strength = 128) => bip39.generateMnemonic(WORDLISTS[langAlias], strength);
    const entropyToMnemonic = (entropy: Uint8Array) => bip39.entropyToMnemonic(entropy, WORDLISTS[langAlias]);
    const mnemonicToEntropy = (mnemonic: string) => bip39.mnemonicToEntropy(mnemonic, WORDLISTS[langAlias]);
    const validateMnemonic = (mnemonic: string) => bip39.validateMnemonic(mnemonic, WORDLISTS[langAlias]);

    return {
        generateMnemonic,
        entropyToMnemonic,
        mnemonicToEntropy,
        validateMnemonic,
        mnemonicToSeed: bip39.mnemonicToSeed,
        mnemonicToSeedSync: bip39.mnemonicToSeedSync,
    } as const;
}

export function checkSeedHex(seed: string) {
    try {
        return hexToBytes(seed).length >= 16;
    } catch {
        return false;
    }
}
