import { entropyToMnemonic } from '@scure/bip39';
import { hexToBytes } from '@noble/hashes/utils';

import type { Network } from '@/types/libs/bitcoin';
import type { Lang } from '@/types/libs/bip39';
import type { Application, ApplicationValue, LanguageValue, LengthValue, MnemonicLength } from '@/types/libs/bip85';

import { getNetwork } from '@/libs/networks';
import { languagesArr } from '@/libs/bip39';

import { asArr, freeze } from '@/utils/general';

const appFactory = (value: string, label: string) => {
    return freeze({ value, label }) as Readonly<Application>;
};

const lengthFactory = (value: number, i18n: string) => {
    return freeze({ value, i18n }) as Readonly<MnemonicLength>;
};

export const applications = freeze({
    wif: appFactory('wif', 'WIF'),
    bip39: appFactory('bip39', 'BIP39'),
    Xprv: appFactory('Xprv', 'XPRV'),
    hex: appFactory('hex', 'Hex'),
} as const);

export const mnemonicLengths = freeze({
    12: lengthFactory(12, 'wallet.bip85.bip39.length.12'),
    18: lengthFactory(18, 'wallet.bip85.bip39.length.18'),
    24: lengthFactory(24, 'wallet.bip85.bip39.length.24'),
} as const);

export const applicationsArr = freeze(asArr(applications));
export const mnemonicLengthsArr = freeze(asArr(mnemonicLengths));
export const mnemonicLanguagesArr = freeze(languagesArr.filter(v => v.id <= 8));

export function getApplication(value: ApplicationValue) {
    return applications[value];
}

export function getMnemonicLength(value: LengthValue) {
    return mnemonicLengths[value];
}

export function getMnemonicLanguage(value: LanguageValue) {
    return asArr(mnemonicLanguagesArr).filter(x => x.id === value)[0]!;
}

interface CalcBip85ChildOptions {
    application: Application,
    rootBase58: string,
    network: Network,
    language: Lang,
    length: MnemonicLength,
    index: number,
    bytes: number,
}

export function calcBip85Child(options: CalcBip85ChildOptions): string {
    const { application, rootBase58, network, index, language, length, bytes } = options;

    if (!rootBase58) {
        return '';
    }

    const key = libs.bitcoin.HDNode.fromBase58(rootBase58, network);

    if (!key) {
        return '';
    }

    key.keyPair.network = getNetwork('bitcoin');

    const app = application.value;
    const master = libs.bip85.BIP85.fromBase58(key.toBase58());

    if (app === 'bip39') {
        const entropy = master.deriveBIP39(language.id as LanguageValue, length.value, index);

        return entropyToMnemonic(hexToBytes(entropy.toEntropy()), WORDLISTS[language.alias]);
    }
    else if (app === 'wif') {
        return master.deriveWIF(index).toWIF();
    }
    else if (app === 'Xprv') {
        return master.deriveXPRV(index).toXPRV();
    }
    else if (app === 'hex') {
        return master.deriveHex(bytes, index).toEntropy();
    }

    return '';
}
