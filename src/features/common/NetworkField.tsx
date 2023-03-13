import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { PrimitiveAtom } from 'jotai/vanilla';
import { useAtom } from 'jotai/react';

import type { Network } from '@/types/libs/bitcoin';

import { getNetwork, networks } from '@/libs/networks';
import { asArr } from '@/utils/general';

import type { FormControlProps } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Select } from '@/components/chakra';

interface NetworkFieldProps extends FormControlProps {
    networkAtom: PrimitiveAtom<Network>,
}

export const NetworkField = memo(function NetworkField(Props: NetworkFieldProps) {
    const { networkAtom, ...props } = Props;

    const { t } = useTranslation();
    const [ network, setNetwork ] = useAtom(networkAtom);

    const handleNetwork = useCallback((v: Network | null) => setNetwork(v ?? getNetwork('bitcoin')), [ setNetwork ]);

    return (
        <FormControl {...props}>
            <FormLabel>
                <b>{t('network')}</b>
            </FormLabel>

            <Select
                options={asArr(networks())}
                value={network}
                onChange={handleNetwork}
                getOptionLabel={v => v.name}
                getOptionValue={v => v.alias}
                placeholder={t('network')}
            />
        </FormControl>
    );
});
