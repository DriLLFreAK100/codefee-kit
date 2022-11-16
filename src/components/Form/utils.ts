/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export type FormDefinition<T extends Record<string, unknown>> = {
  initialValue?: T;
  onChange?: (newValue: T) => void;
};

class Form<T extends Record<string, unknown>> {
  value!: T;

  formDef: FormDefinition<T> = {};

  private isTouched$ = false;

  constructor(formDef: FormDefinition<T>) {
    this.formDef = formDef;
    this.reset();
  }

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

  public setValue(value: T): T {
    this.value = this.makeValueProxy(value);
    this.performChanges(this.value);
    return this.value;
  }

  public reset(): void {
    this.isTouched$ = false;

    if (this.formDef.initialValue) {
      this.value = this.makeValueProxy(this.formDef.initialValue);
    } else {
      this.value = this.makeValueProxy({} as any);
    }

    this.resetChildForms();
  }

  private resetChildForms(): void {
    Object.values(this.value).forEach((v) => {
      if (v instanceof Form) {
        v.reset();
      }
    });
  }

  private makeValueProxy(val: T): T {
    const onPerformChanges = (newValue: T) => this.performChanges(newValue);

    const proxyHandler: ProxyHandler<T> = {
      get(target, prop: string) {
        return target[prop];
      },
      set(target, prop, newValue) {
        onPerformChanges(newValue);

        (target as any)[prop] = newValue;
        return true;
      },
    };

    return new Proxy({ ...val }, proxyHandler);
  }

  private performChanges(newValue: T): void {
    this.isTouched$ = true;
    this.formDef.onChange?.(newValue);
  }
}

export default Form;
