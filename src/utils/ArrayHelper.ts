/* eslint-disable import/prefer-default-export */
export const fillArray = (
  count: number,
): number[] => new Array(count).fill(null).map((_, i) => i);
