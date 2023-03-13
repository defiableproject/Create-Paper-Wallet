import type { Theme as _Theme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import foundations from './foundations';
import components from './components';
import config from './config';
import styles from './styles';

export type Theme = _Theme & typeof _theme

const _theme = {
    components,
    config,
    ...foundations,
    styles,
} as const;

export const theme = extendTheme(_theme) as Theme;
export const colors = theme.colors;
