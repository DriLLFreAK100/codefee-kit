/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import React, { forwardRef, FormHTMLAttributes } from 'react';
import { useForm, FormDefinition, VirtualForm } from './model';

export type FormProps<T extends Record<string, unknown>> = {
  formDef: FormDefinition<T>;
  render: (vform: VirtualForm<T>) => JSX.Element;
} & FormHTMLAttributes<HTMLFormElement>;

const Form = (<T extends Record<string, unknown>>() => {
  const Component = forwardRef<HTMLFormElement, FormProps<T>>(
    (props: FormProps<T>, ref): JSX.Element => {
      const { formDef, render, ...passThrough } = props;

      const vform = useForm(formDef);

      if (!vform) {
        return <></>;
      }

      return (
        <form ref={ref} {...passThrough}>
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
