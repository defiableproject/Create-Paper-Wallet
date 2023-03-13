import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translation_en from '@/locales/translation.en';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: typeof resources['en'];
    }
}

export const defaultNS = 'translation' as const;
export const resources = {
    en: {
        translation: translation_en,
    },
} as const;

i18n.use(initReactI18next);
i18n.use(LanguageDetector);
i18n.init({
    fallbackLng: 'en',
    supportedLngs: [ 'cs', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'zh' ],
    nonExplicitSupportedLngs: true,

    resources,
    ns: [ 'translation' ],
    defaultNS,

    cleanCode: true,
    debug: true,
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
