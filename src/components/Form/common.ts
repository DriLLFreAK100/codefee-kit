export type FormFieldValidator<T> = (value: T) => boolean;

export type Validation = Promise<
  [string, boolean | Promise<FormValidationProcessingResult>]
>;

export type FormValidationProcessingResult = {
  isValid: boolean;
  result: Record<string, boolean | FormValidationProcessingResult>;
};

export type FormValidationResult = {
  isValid: boolean;
  result: Record<string, boolean>;
};

export type FormOptions = {
  /**
   * Whether to perform validation on every value change
   */
  validateOnChange: boolean;
};

export type FormDefinition<T extends Record<string, unknown>> = {
  initialValue?: T;
  rules?: { [key in keyof Partial<T>]: FormFieldValidator<T[keyof T]> };
  onChange?: (newValue: T) => void;
  options?: FormOptions;
};

export const defaultFormValidationResult: FormValidationResult = {
  isValid: false,
  result: {},
};

export const defaultFormOptions: FormOptions = {
  validateOnChange: false,
};
