import { useCallback } from 'react';

import type { LangAlias } from '@/types/libs/bip39';

import { getLanguage, languagesArr } from '@/libs/bip39';
import { useMnemonic } from '@/hooks/wallet';

import { Flex, FlexProps, StackProps, useRadioGroup } from '@chakra-ui/react';

import { LanguageRadio } from '@/features/walletAdvanced/bip39';

export function LanguageGroup(Props: StackProps) {
    const { langAlias, setLang } = useMnemonic();

    const handleChange = useCallback((s: LangAlias) => setLang(getLanguage(s)), [ setLang ]);

    const { getRootProps, getRadioProps } = useRadioGroup({
        value: langAlias,
        onChange: handleChange,
    });

    const styles: FlexProps = {
        flexWrap: 'wrap',
        columnGap: 3,
        rowGap: 5,
        mt: 3,
    };

    return (
        <Flex {...styles} {...Props} {...getRootProps()}>
            {languagesArr.map(v => {
                const { alias, label } = v;
                const radio = getRadioProps({ name: alias, value: alias });

                return <LanguageRadio key={alias} {...radio} {...{ label }} />;
            })}
        </Flex>
    );
}
