/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import React, { forwardRef, FormHTMLAttributes, FormEvent } from 'react';
import { useForm, FormDefinition, VirtualForm } from './model';

export type FormProps<T extends Record<string, unknown>> = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  'onSubmit'
> & {
  formDef: FormDefinition<T>;
  render: (vform: VirtualForm<T>) => JSX.Element;
  onSubmit?: (value?: T) => void;
};

const Form = (<T extends Record<string, unknown>>() => {
  const Component = forwardRef<HTMLFormElement, FormProps<T>>(
    (props: FormProps<T>, ref): JSX.Element => {
      const { formDef, render, onSubmit, ...passThrough } = props;

      const vform = useForm(formDef);

      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit?.(vform?.value);
        vform?.reset();
      };

      if (!vform) {
        return <></>;
      }

      return (
        <form ref={ref} onSubmit={handleSubmit} {...passThrough}>
          {render(vform)}
        </form>
      );
    }
  );

  Component.displayName = 'Form';
  Component.defaultProps = {};

  return Component;
})();

export default Form;
