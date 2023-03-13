import type { Lang, LangAlias, LangId } from '@/types/libs/bip39';

import { asArr } from '@/utils/general';

const factory = (id: number, alias: string, label: string) => {
    return Object.freeze({ id, alias, label }) as Readonly<Lang>;
};

export const languages = Object.freeze({
    english: factory(0, 'english', 'English'),
    japanese: factory(1, 'japanese', '日本語'),
    korean: factory(2, 'korean', '한국어'),
    spanish: factory(3, 'spanish', 'Español'),
    chinese_simplified: factory(4, 'chinese_simplified', '中文(简体)'),
    chinese_traditional: factory(5, 'chinese_traditional', '中文(繁體)'),
    french: factory(6, 'french', 'Français'),
    italian: factory(7, 'italian', 'Italiano'),
    czech: factory(8, 'czech', 'Čeština'),
    portuguese: factory(9, 'portuguese', 'Português'),
} as const);

export const languagesArr = Object.freeze(asArr(languages));

export function getLanguage(alias: LangAlias) {
    return languages[alias];
}

export function getLanguageById(id: LangId) {
    return languagesArr.filter(x => x.id === id)[0]!;
}
