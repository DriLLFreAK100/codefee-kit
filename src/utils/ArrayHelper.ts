/* eslint-disable import/prefer-default-export */
const stockFill = (index: number) => index;

export const fillArray = <T>(
  count: number,
  callback: (index: number) => unknown = stockFill,
): T[] => new Array(count).fill(null).map((_, i) => callback(i)) as T[];
