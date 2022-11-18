/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/**
 * Check if the input value is a `Promise`
 * @param value Value to check
 * @returns A boolean
 */
export const isPromise = (value: any) =>
  Boolean(
    value && typeof value === 'object' && typeof value.then === 'function'
  );
