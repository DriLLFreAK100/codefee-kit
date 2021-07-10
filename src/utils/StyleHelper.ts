import { Gutter } from 'common/Types';
import { ITheme } from 'common/Theme';
/* eslint-disable import/prefer-default-export */

/**
 * Convert px to rem
 * @param px Px intended
 * @param basePx Base FontSize Px to compute resulting rem. Default is 16px.
 */
export const rem = (px: number, basePx: number = 16): string => {
  return `${px / basePx}rem`;
};

/**
 * Get Custom CSS Variable
 */
export const cvar = (key: keyof ITheme): string => {
  return `var(${key})`;
};

/**
 * Get Gutter size in rem
 * @param value Gutter space size, 0 - 40, step by 4
 * @returns CSS rem value
 */
export const gut = (value: Gutter): string => {
  return rem(value);
};
