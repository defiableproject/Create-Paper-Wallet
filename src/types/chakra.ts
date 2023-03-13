import type { PartsStyleFunction, SystemStyleFunction } from '@chakra-ui/styled-system';
import type { ComponentDefaultProps, ComponentMultiStyleConfig, ComponentSingleStyleConfig } from '@chakra-ui/theme';
import type { SystemStyleInterpolation } from '@chakra-ui/react';

interface Anatomy {
    keys: string[],
}

export type StyleSingle = ComponentSingleStyleConfig
export type StyleMulti = ComponentMultiStyleConfig

export type StyleDefaultProps = ComponentDefaultProps

export type StyleSingleBase = SystemStyleFunction
export type StyleSingleSize = SystemStyleInterpolation
export type StyleSingleVariant = SystemStyleInterpolation

export type StyleMultiBase<T extends Anatomy> = PartsStyleFunction<T>
export type StyleMultiVariant<T extends Anatomy> = PartsStyleFunction<T>
