import { toVarRef } from '@chakra-ui/theme-tools';

import type { Theme } from '@/theme';
import { theme } from '@/theme';

import { uniqueArr } from '@/utils/general';

type StrNum = string | number

export const xxl = '2xl' as const;

export function cx(...args: unknown[]) {
    const classNames = [ args ]
        .flat(Infinity)
        .reduce<string[]>((acc, v) => {
            if (typeof v === 'string') {
                acc.push(v.trim());
            }

            return acc;
        }, []);

    return uniqueArr(classNames).join(' ');
}

export function cssVar(name: string, fallback?: string): string {
    return toVarRef('--' + name.replace(/\./g, '-'), fallback);
}

export function tVar(name: string, fallback?: string): string {
    return cssVar(`chakra.${name}`, fallback);
}

export type Colors = Theme['colors'] & Theme['semanticTokens']['colors']
export type ColorsKeys = keyof Colors
export type Color<C extends ColorsKeys, H extends StrNum & keyof CO, CO extends Colors[C]> = C | `${C}.${H}`

export function tColor<C extends ColorsKeys, H extends StrNum & keyof CO, CO extends Colors[C]>(
    name: Color<C, H, CO>,
    fallback?: string,
): string {
    return tVar(`colors.${name}`, fallback ?? 'gray.100');
}

export function tColorRaw<C extends ColorsKeys, H extends StrNum & keyof CO, CO extends Colors[C]>(
    name: Color<C, H, CO>,
    fallback?: string,
): CO extends string ? CO : (CO[H] extends string ? CO[H] : never) {
    const ch = String(name).split('.') as [ C, H ];

    const color = ch[0];
    const hue = ch[1] ?? 500;

    const match = theme.colors[color as never] as CO;

    if (typeof match === 'string') {
        return match as never;
    }

    if (typeof match === 'object' && hue in match) {
        return String(match[hue]) as never;
    }

    return (fallback ?? 'gray.200') as never;
}

export function _bgColor(bg: string, color: string) {
    return { bg, color };
}

export function newShade(hexColor: string, magnitude: number) {
    const color = hexColor.replace('#', '');

    if (color.length !== 6) {
        return color;
    }

    const decimalColor = parseInt(color, 16);

    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);

    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);

    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);

    return '#' + (g | (b << 8) | (r << 16)).toString(16);
}
