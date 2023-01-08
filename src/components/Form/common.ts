export type FormFieldValidator<T> = (value: T) => boolean;

export type Validation = Promise<
  [string, boolean | Promise<FormValidationProcessingResult>]
>;

export type FormValidationProcessingResult = {
  /**
   * Validation result summary, i.e. pass(`true`) or fail(`false`)
   */
  isValid: boolean;
  /**
   * Indicates the validation results of individual fields, or a nested result object if the field is also a Form
   */
  result: Record<string, boolean | FormValidationProcessingResult>;
};

export type FormValidationResult = {
  /**
   * Validation result summary, i.e. pass(`true`) or fail(`false`)
   */
  isValid: boolean;
  /**
   * Indicates the validation results of individual fields
   */
  result: Record<string, boolean>;
};

export type FormOptions = {
  /**
   * Whether to perform validation on every value change
   */
  validateOnChange: boolean;
};

export type FormDefinition<T extends Record<string, unknown>> = {
  /**
   * Initial value of the form
   */
  initialValue?: T;
  /**
   * Validation rules
   */
  rules?: { [key in keyof Partial<T>]: FormFieldValidator<T[keyof T]> };
  /**
   * onChange handler when form value changes
   * @param newValue Update value resulting from form value changes
   * @returns
   */
  onChange?: (newValue: T) => void;
  /**
   * Additional options to configure form behavior
   */
  options?: FormOptions;
};

export const defaultFormValidationResult: FormValidationResult = {
  isValid: false,
  result: {},
};

export const defaultFormOptions: FormOptions = {
  validateOnChange: false,
};
