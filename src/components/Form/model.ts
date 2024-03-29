/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useRerender from 'hooks/useRerender';
import merge from 'lodash-es/merge';
import { useEffect, useState } from 'react';
import { isPromise } from 'utils/TypeHelper';
import { notUndefined } from './validators';
import {
  FormDefinition,
  FormValidationProcessingResult,
  FormValidationResult,
  Validation,
  defaultFormOptions,
  defaultFormValidationResult,
} from './common';

/**
 * Resolve form validations. If the field is a `Form`, it will invoke the field's validation
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
          return (r as FormValidationProcessingResult).isValid;
        }
        return r;
      }),
      result: res.reduce(
        (acc, curr) => ({ ...acc, [curr[0] as string]: curr[1] }),
        {}
      ),
    }));

/**
 * Model representaton of a Form
 */
export class VirtualForm<T extends Record<string, unknown>> {
  public value!: T;

  public formDef: FormDefinition<T> = {};

  private isTouched$ = false;

  private validationResult$ = defaultFormValidationResult;

  constructor(formDef: FormDefinition<T>) {
    this.formDef = {
      ...formDef,
      options: merge(defaultFormOptions, formDef),
    };
    this.reset();
  }

  public get validationResult(): FormValidationResult {
    return this.validationResult$;
  }

  /**
   * Check if the form value has changed since init/reset
   */
  public get isTouched(): boolean {
    return (
      this.isTouched$ ||
      Object.values(this.value).some((v) => {
        if (v instanceof VirtualForm) {
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
    // Clear internal states
    this.isTouched$ = false;
    this.validationResult$ = defaultFormValidationResult;

    // Reset form value
    if (this.formDef.initialValue) {
      this.value = this.makeValueProxy(this.formDef.initialValue);
    } else {
      this.value = this.makeValueProxy({} as any);
    }

    this.resetChildForms();
    this.formDef.onChange?.(this.value);
  }

  /**
   * Executes form validation asynchronously
   * @returns A promise of validation result
   */
  public async validate(): Promise<FormValidationProcessingResult> {
    const validations: Validation[] = Object.entries(this.value).map(
      ([field, val]) => {
        // Invoke nested form's validation func
        if (val instanceof VirtualForm) {
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

    const res = resolveValidations(validations);

    // Store validation results
    void res.then((r) => {
      this.isTouched$ = true;
      this.validationResult$ = r;
      this.formDef.onChange?.(this.value);
    });

    return res;
  }

  public hasError(field: string): boolean {
    if (this.isTouched) {
      if (notUndefined(this.validationResult.result[field])) {
        return !this.validationResult.result[field];
      }

      return false;
    }

    return false;
  }

  /**
   * Reset nested forms in form value
   */
  private resetChildForms(): void {
    Object.values(this.value).forEach((v) => {
      if (v instanceof VirtualForm) {
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

    if (this.formDef.options?.validateOnChange) {
      void this.validate();
    }
  }
}

/**
 * Return a VirtualForm instance
 * @param formDef Form definition
 * @returns
 */
export const defineForm = <T extends Record<string, unknown>>(
  formDef: FormDefinition<T>
): VirtualForm<T> => new VirtualForm(formDef);

/**
 * Hook to create and access VirtualForm
 */
export const useForm = <T extends Record<string, unknown>>(
  formDef: FormDefinition<T>
): VirtualForm<T> | undefined => {
  const { rerender } = useRerender();
  const [form, setForm] = useState<VirtualForm<T>>();

  useEffect(() => {
    setForm(
      defineForm({
        ...formDef,
        onChange: (val) => {
          formDef.onChange?.(val);
          rerender();
        },
      })
    );
  }, [formDef, rerender]);

  return form;
};
