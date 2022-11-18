import { describe, expect, test } from 'vitest';
import {
  compose,
  min,
  max,
  between,
  notFalsy,
  notEmptyString,
  notNull,
  notUndefined,
} from '../validators';

describe('compose', () => {
  test('should be able to compose validators into a single validator', () => {
    const rangeValidator = compose(min(0), max(10));
    expect(typeof rangeValidator).toBe('function');
    expect(rangeValidator(-1)).toBeFalsy();
    expect(rangeValidator(0)).toBeTruthy();
    expect(rangeValidator(5)).toBeTruthy();
    expect(rangeValidator(10)).toBeTruthy();
    expect(rangeValidator(11)).toBeFalsy();
  });
});

describe('min', () => {
  test('should be able to check for min value', () => {
    const check = min(0);
    expect(check(-1)).toBeFalsy();
    expect(check(0)).toBeTruthy();
    expect(check(1)).toBeTruthy();
  });
});

describe('max', () => {
  test('should be able to check for max value', () => {
    const check = max(10);
    expect(check(9)).toBeTruthy();
    expect(check(10)).toBeTruthy();
    expect(check(11)).toBeFalsy();
  });
});

describe('between', () => {
  test('should be able to check if value is in between defined range', () => {
    const check = between(1, 5);
    expect(check(0)).toBeFalsy();
    expect(check(1)).toBeFalsy();
    expect(check(3)).toBeTruthy();
    expect(check(5)).toBeFalsy();
    expect(check(6)).toBeFalsy();
  });

  test('should be able to set to include boundary values', () => {
    const check = between(1, 5, true);
    expect(check(0)).toBeFalsy();
    expect(check(1)).toBeTruthy();
    expect(check(3)).toBeTruthy();
    expect(check(5)).toBeTruthy();
    expect(check(6)).toBeFalsy();
  });
});

describe('notFalsy', () => {
  test('should be able to check for not falsy value', () => {
    expect(notFalsy(false)).toBeFalsy();
    expect(notFalsy(0)).toBeFalsy();
    expect(notFalsy(-0)).toBeFalsy();
    expect(notFalsy('')).toBeFalsy();
    expect(notFalsy(null)).toBeFalsy();
    expect(notFalsy(undefined)).toBeFalsy();
    expect(notFalsy(NaN)).toBeFalsy();

    expect(notFalsy(1)).toBeTruthy();
    expect(notFalsy(' ')).toBeTruthy();
    expect(notFalsy({})).toBeTruthy();
    expect(notFalsy([])).toBeTruthy();
    expect(notFalsy(() => {})).toBeTruthy();
  });
});

describe('notEmptyString', () => {
  test('should be able to check for not empty string', () => {
    expect(notEmptyString('')).toBeFalsy();
    expect(notEmptyString(' ')).toBeTruthy();
  });
});

describe('notNull', () => {
  test('should be able to check for not null', () => {
    expect(notNull(null)).toBeFalsy();
    expect(notNull(undefined)).toBeTruthy();
  });
});

describe('notUndefined', () => {
  test('should be able to check for not undefined', () => {
    expect(notUndefined(undefined)).toBeFalsy();
    expect(notUndefined(null)).toBeTruthy();
  });
});
