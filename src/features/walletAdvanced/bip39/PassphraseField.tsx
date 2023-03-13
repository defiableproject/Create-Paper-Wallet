import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { bip39_A } from '@/state/walletAdvanced';

import { useAtomPatcher, useStringHandler } from '@/hooks';

import type { FormControlProps } from '@chakra-ui/react';
import { Button, FormControl, Input, InputGroup, InputRightElement, useBoolean } from '@chakra-ui/react';
import { FormLabel } from '@/components/chakra';

export const PassphraseField = memo(function PassphraseField(Props: FormControlProps) {
    const { t } = useTranslation();

    const [ { passphrase }, patchBip39 ] = useAtomPatcher(bip39_A);
    const [ show, { toggle: handleShow } ] = useBoolean(false);

    const show_i18n = t(show ? 'walletAdvanced.bip39.passphrase.hide' : 'walletAdvanced.bip39.passphrase.show');

    const handleChange = useStringHandler(v => patchBip39(_ => _.passphrase, v), [ patchBip39 ]);

    return (
        <FormControl {...Props}>
            <FormLabel title={t('walletAdvanced.bip39.passphrase')}>
                {t('walletAdvanced.bip39.passphrase_short')}
            </FormLabel>

            <InputGroup size="md">
                <Input value={passphrase} onChange={handleChange} type={show ? 'text' : 'password'} pr={20} />

                <InputRightElement justifyContent="flex-end" w={18} pr={1}>
                    <Button onClick={handleShow} size="sm" pt={1}>
                        {show_i18n}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
});
