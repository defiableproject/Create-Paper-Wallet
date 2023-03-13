import { memo, PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, useBoolean } from '@chakra-ui/react';
import { Else, If, Then } from 'react-if';

export const PrivateToggle = memo(function PrivateToggle(Props: PropsWithChildren) {
    const { children } = Props;

    const { t } = useTranslation();
    const [ show, setShow ] = useBoolean(false);

    const handleClick = useCallback(() => setShow.toggle(), [ setShow ]);

    return (
        <If condition={show}>
            <Then>
                {children}
            </Then>
            <Else>
                <Button
                    variant="unstyled"
                    onClick={handleClick}
                    fontSize="lg"
                    fontWeight="medium"
                    h="initial"
                    w="fit-content"
                >
                    {t('vanity.result.privateKey.toggle')}
                </Button>
            </Else>
        </If>
    );
});
