import { bytesToHex } from '@noble/hashes/utils';

import type { Lang } from '@/types/libs/bip39';
import { walletAdvancedStore } from '@/state/walletAdvanced';

import { storePatcher, storeValue } from '@/utils/zustand';
import { checkSeedHex, localeMnemonic } from '@/utils/walletAdvanced/bip39';

export function overwriteLanguage(lang: Lang) {
    const patch = storePatcher(walletAdvancedStore);

    patch(_ => _.bip39.language, lang);
    autogenWords();
}

export function autogenWords() {
    const patch = storePatcher(walletAdvancedStore);
    const { bip39 } = storeValue(walletAdvancedStore);

    const { language } = bip39;
    const { generateMnemonic } = localeMnemonic(language.alias);

    patch(_ => _.bip39.words, generateMnemonic());
}

export function checkWords() {
    const patch = storePatcher(walletAdvancedStore);
    const { bip39 } = storeValue(walletAdvancedStore);

    const { language, words } = bip39;
    const { validateMnemonic } = localeMnemonic(language.alias);

    const wordsOk = words === '' || validateMnemonic(words);

    patch(_ => _.bip39.wordsOk, wordsOk);
}

export function computeSeed() {
    const { bip39 } = storeValue(walletAdvancedStore);

    const { language, words, wordsOk, passphrase } = bip39;
    const { mnemonicToSeedSync } = localeMnemonic(language.alias);

    if (!wordsOk) {
        return '';
    }

    return bytesToHex(mnemonicToSeedSync(words, passphrase));
}

export function overwriteSeed(seed: string) {
    const patch = storePatcher(walletAdvancedStore);
    const { bip39 } = storeValue(walletAdvancedStore);

    const { language } = bip39;

    patch(_ => _.bip39, {
        language,

        words: '',
        wordsOk: true,

        passphrase: '',

        seed,
        seedOk: !seed || checkSeedHex(seed),
    });
}

export function autogenSeed() {
    const patch = storePatcher(walletAdvancedStore);
    const { bip39 } = storeValue(walletAdvancedStore);

    const { words, wordsOk } = bip39;

    if (!words) {
        return;
    }

    let seed: string;

    try {
        seed = wordsOk ? computeSeed() : '';
    } catch (error) {
        seed = '';

        console.log(error);
    }

    patch(_ => _.bip39.seed, seed);
}

export function checkSeed() {
    const patch = storePatcher(walletAdvancedStore);
    const { bip39 } = storeValue(walletAdvancedStore);

    const { seed } = bip39;

    patch(_ => _.bip39.seedOk, !seed || checkSeedHex(seed));
}
