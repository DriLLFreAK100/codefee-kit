/* eslint-disable import/prefer-default-export */
/**
 * Clean up and even out all single spaces
 * @param text Text to flatten
 */
export const flatten = (text: string): string =>
  text
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .split(' ')
    .filter((x) => x)
    .join(' ');
