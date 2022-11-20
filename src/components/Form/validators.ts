import { FormFieldValidator } from './common';

/**
 * Compose form validators into a single form validator
 * @param validators Form Validators
 * @returns A combined form validator
 */
export const compose =
  <T>(...validators: FormFieldValidator<T>[]) =>
  (val: T): boolean =>
    validators.every((v) => v(val));

/**
 * Check if value is more than or equal to defined minimum
 * @param minVal Min value
 * @returns Boolean value
 */
export const min =
  (minVal: number): FormFieldValidator<number> =>
  (val) =>
    val >= minVal;

/**
 * Check if value is less than or equal to defined maximum
 * @param maxVal Max value
 * @returns Boolean value
 */
export const max =
  (maxVal: number): FormFieldValidator<number> =>
  (val) =>
    val <= maxVal;

/**
 * Check if value is in within range
 * @param minVal Min value
 * @param maxVal Max value
 * @param isIncludeBoundaries If true, min and max values are included. Else, they are excluded. Default is `false`
 * @returns Boolean value
 */
export const between =
  (
    minVal: number,
    maxVal: number,
    isIncludeBoundaries = false
  ): FormFieldValidator<number> =>
  (val: number) => {
    if (isIncludeBoundaries) {
      return val >= minVal && val <= maxVal;
    }
    return val > minVal && val < maxVal;
  };

/**
 * Check if the value is not a falsy value
 * Refer to https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 *
 * @param val Value
 * @returns Boolean value
 */
export const notFalsy: FormFieldValidator<unknown> = (val) => Boolean(val);

/**
 * Check if the value is not empty string
 * @param val Value
 * @returns Boolean value
 */
export const notEmptyString: FormFieldValidator<string> = (val) => val !== '';

/**
 * Check if the value is not null
 * @param val Value
 * @returns Boolean value
 */
export const notNull: FormFieldValidator<unknown> = (val) => val !== null;

/**
 * Check if the value is not undefined
 * @param val Value
 * @returns Boolean value
 */
export const notUndefined: FormFieldValidator<unknown> = (val) =>
  val !== undefined;
