/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { FormDefinition } from './model';

export type FormProps<T extends Record<string, unknown>> = {
  defaultValue?: T;
  definition: FormDefinition<T>;
};

const Form = <T extends Record<string, unknown>>({
  defaultValue,
  definition,
}: PropsWithChildren<FormProps<T>>): JSX.Element => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return <></>;
};

Form.displayName = 'Form';
Form.defaultProps = {
  defaultValue: {},
};

export default Form;
