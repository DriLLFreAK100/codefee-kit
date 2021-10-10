import { Gutter } from 'common/Types';
import { ITheme } from 'common/Theme';
/* eslint-disable import/prefer-default-export */

/**
 * Convert px to rem
 * @param px Px intended
 * @param basePx Base FontSize Px to compute resulting rem. Default is 16px.
 */
export const rem = (px: number, basePx = 16): string => `${px / basePx}rem`;

/**
 * Get CSS Variable
 */
export const cvar = (key: keyof ITheme): string => `var(${key})`;

/**
 * Get Generic Custom CSS Variable
 */
export const cvarGen = <T>(key: keyof T): string => `var(${key as string})`;

/**
 * Get Gutter size in rem
 * @param value Gutter space size, 0 - 40, step by 4
 * @returns CSS rem value
 */
export const gut = (value: Gutter): string => rem(value);

/**
 * Transform Json to a CSS string
 * @param json Json specifying CSS Properties or CSS Variables
 * @returns CSS string
 */
export const jsonToCss = <T>(json: T): string => `${Object
  .entries(json)
  .map(([key, value]) => `${key}: ${value as string}`)
  .join(';')};`;
