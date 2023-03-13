import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAtomValue } from 'jotai/react';

import { config_A, status_A } from '@/state/vanity';
import { decrementThreads, incrementThreads } from '@/state/vanity/config';

import type { FormControlProps } from '@chakra-ui/react';
import { Button, FormControl, InputGroup, InputLeftElement, InputRightElement, Tooltip } from '@chakra-ui/react';
import { FormLabel, MonoInput } from '@/components/chakra';

export const ThreadsField = memo(function ThreadsField(Props: FormControlProps) {
    const { t } = useTranslation();

    const { threads } = useAtomValue(config_A);
    const { running } = useAtomValue(status_A);

    const handleIncrement = useCallback(() => running || incrementThreads(), [ running ]);
    const handleDecrement = useCallback(() => running || decrementThreads(), [ running ]);

    return (
        <FormControl {...Props} isDisabled={running}>
            <FormLabel title={t('vanity.config.threads')}>
                {t('vanity.config.threads_short')}
            </FormLabel>

            <InputGroup size="md">
                <InputLeftElement justifyContent="flex-start" w={10} pl={1}>
                    <Tooltip label={t('vanity.config.threads.decrement')}>
                        <Button
                            size="sm"
                            onClick={handleDecrement}
                            isDisabled={running || threads <= 1}
                        >-</Button>
                    </Tooltip>
                </InputLeftElement>

                <MonoInput value={threads} isReadOnly px={12} textAlign="center" />

                <InputRightElement justifyContent="flex-end" w={10} pr={1}>
                    <Tooltip label={t('vanity.config.threads.increment')}>
                        <Button
                            size="sm"
                            onClick={handleIncrement}
                            isDisabled={running}
                        >+</Button>
                    </Tooltip>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
});
