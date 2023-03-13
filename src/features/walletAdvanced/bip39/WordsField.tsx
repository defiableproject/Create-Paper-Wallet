import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { bip39_A } from '@/state/walletAdvanced';
import { autogenWords, checkWords } from '@/state/walletAdvanced/bip39';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { Button, Flex, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

import { ResponsiveTextarea } from '@/features/common';

export const WordsField = memo(function WordsField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { words, wordsOk }, patchBip39 ] = useAtomPatcher(bip39_A);

    // Must run only when first mounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => void (words || autogenWords()), []);
    useEffect(checkWords, [ words ]);

    const handleChange = useStringHandler(v => patchBip39(_ => _.words, v), [ patchBip39 ]);

    return (
        <FormControl {...Props} isRequired isInvalid={!wordsOk}>
            <FormLabel title={t('walletAdvanced.bip39.mnemonic')}>
                {t('walletAdvanced.bip39.mnemonic_short')}
            </FormLabel>

            <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={3}
            >
                <ResponsiveTextarea value={words} onChange={handleChange} />

                <Button
                    onClick={autogenWords}
                    alignSelf={{ md: 'stretch' }}
                    h={{ base: 10, md: 'initial' }}
                >{t('walletAdvanced.bip39.generate')}</Button>
            </Flex>

            <FormErrorMessage>
                <b>{t('walletAdvanced.bip39.errors.invalidMnemonic')}</b>
            </FormErrorMessage>
        </FormControl>
    );
});
