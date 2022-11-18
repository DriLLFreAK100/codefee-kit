import { describe, expect, test } from 'vitest';
import { isPromise } from './TypeHelper';

describe('isPromise', () => {
  test('should be able to check if it is a promise', () => {
    expect(isPromise(Promise.resolve())).toBeTruthy();

    expect(isPromise('')).toBeFalsy();
    expect(isPromise(null)).toBeFalsy();
    expect(isPromise(undefined)).toBeFalsy();
    expect(isPromise({})).toBeFalsy();
    expect(isPromise([])).toBeFalsy();
    expect(isPromise(1)).toBeFalsy();
    expect(isPromise(() => {})).toBeFalsy();
  });
});
