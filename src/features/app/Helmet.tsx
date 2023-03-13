import type { TFuncKey } from 'i18next';
import { useTranslation } from 'react-i18next';

import type { HelmetProps } from 'react-helmet';
import { Helmet as _Helmet } from 'react-helmet';

import { bullets, hardTrim } from '@/utils/general';

interface Props extends HelmetProps {
    title: TFuncKey | '';
    description: TFuncKey;
}

export function Helmet(Props: Props) {
    const { children, title: titleKey, description: descKey, ...props } = Props;

    const { t } = useTranslation();

    const title = hardTrim(bullets(titleKey && t(titleKey), t('app.name')));
    const description = hardTrim(t(descKey));

    return (
        <_Helmet {...props}>
            <title>{title}</title>

            <meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {children}
        </_Helmet>
    );
}
