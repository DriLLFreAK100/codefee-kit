/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { isPromise } from 'utils/TypeHelper';

export type FormFieldValidator<T> = (value: T) => boolean;

export type Validation = Promise<
  [string, boolean | Promise<FormValidationResult>]
>;

export type FormValidationResult = {
  isValid: boolean;
  result: Record<string, boolean | FormValidationResult>;
};

export type FormDefinition<T extends Record<string, unknown>> = {
  initialValue?: T;
  rules?: { [key in keyof Partial<T>]: FormFieldValidator<T[keyof T]> };
  onChange?: (newValue: T) => void;
};

/**
 * Resolve validations. If the field is a `Form`, it will invoke the field's validation
 * @param validations Promises of validation
 * @returns
 */
const resolveValidations = (validations: Validation[]) =>
  Promise.all(validations)
    .then(async (res) =>
      // Resolve nested forms' validations
      Promise.all(
        res.map(async (r) => {
          if (isPromise(r[1])) {
            const val = await r[1];
            return [r[0], val];
          }

          return r;
        })
      )
    )
    .then((res) => ({
      // Return final results
      isValid: res.every(([, r]) => {
        if (typeof r === 'object') {
          return (r as FormValidationResult).isValid;
        }
        return r;
      }),
      result: res.reduce(
        (acc, curr) => ({ ...acc, [curr[0] as string]: curr[1] }),
        {}
      ),
    }));

class Form<T extends Record<string, unknown>> {
  public value!: T;

  public formDef: FormDefinition<T> = {};

  private isTouched$ = false;

  constructor(formDef: FormDefinition<T>) {
    this.formDef = formDef;
    this.reset();
  }

  /**
   * Check if the form value has changed since init/reset
   */
  public get isTouched(): boolean {
    return (
      this.isTouched$ ||
      Object.values(this.value).some((v) => {
        if (v instanceof Form) {
          return v.isTouched;
        }
        return false;
      })
    );
  }

  /**
   * Set new value for the form
   * @param value New form value
   * @returns
   */
  public setValue(value: T): T {
    this.value = this.makeValueProxy(value);
    this.performChanges(this.value);
    return this.value;
  }

  /**
   * Reset form to its initial state
   */
  public reset(): void {
    this.isTouched$ = false;

    if (this.formDef.initialValue) {
      this.value = this.makeValueProxy(this.formDef.initialValue);
    } else {
      this.value = this.makeValueProxy({} as any);
    }

    this.resetChildForms();
  }

  /**
   * Executes form validation asynchronously
   * @returns A promise of validation result
   */
  public async validate(): Promise<FormValidationResult> {
    const validations: Validation[] = Object.entries(this.value).map(
      ([field, val]) => {
        // Invoke nested form's validation func
        if (val instanceof Form) {
          return Promise.resolve([field, val.validate()]);
        }

        // Resolve if rule is found for the field
        if (this.formDef.rules?.[field]) {
          return Promise.resolve([
            field,
            this.formDef.rules[field](val as T[keyof T]),
          ]);
        }

        // Else just return true
        return Promise.resolve([field, true]);
      }
    );

    return resolveValidations(validations);
  }

  /**
   * Reset nested forms in form value
   */
  private resetChildForms(): void {
    Object.values(this.value).forEach((v) => {
      if (v instanceof Form) {
        v.reset();
      }
    });
  }

  /**
   * Create a Proxy to intercept get/set of the Form value
   * @param val Form value
   * @returns
   */
  private makeValueProxy(val: T): T {
    const onPerformChanges = (newValue: T) => this.performChanges(newValue);

    const proxyHandler: ProxyHandler<T> = {
      get(target, prop: string) {
        return target[prop];
      },
      set(target, prop, newValue) {
        (target as any)[prop] = newValue;
        onPerformChanges(target);
        return true;
      },
    };

    return new Proxy({ ...val }, proxyHandler);
  }

  /**
   * Executes when Form value changes
   * @param newValue Updated Form value
   */
  private performChanges(newValue: T): void {
    this.isTouched$ = true;
    this.formDef.onChange?.(newValue);
  }
}

export default Form;
