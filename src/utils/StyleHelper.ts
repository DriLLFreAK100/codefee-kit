/* eslint-disable import/prefer-default-export */
export const rem = (px: number, basePx: number = 16) => {
  return `${px / basePx}rem`;
};
