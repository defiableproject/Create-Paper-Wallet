import { useTranslation } from 'react-i18next';

import type { UseToastOptions } from '@chakra-ui/react';

import { useSubtleToast } from '@/hooks';

export const useErrorToast = (options: UseToastOptions = {}) => {
    const { t } = useTranslation();

    const status = 'error';
    const title = t('errors.generic.title');

    return useSubtleToast({ title, ...options, status });
};
