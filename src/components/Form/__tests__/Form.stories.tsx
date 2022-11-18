/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from 'components/Button';
import Input from 'components/Input';
import Form, { FormProps } from 'components/Form';
import styles from './Form.stories.module.scss';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Form',
  component: Form,
} as Meta;

type FormType = FormProps<{
  name: string;
  email: string;
  age: number;
}>;

const Template: Story<FormType> = (args: FormType) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  formDef: {
    initialValue: {
      name: 'codefeetime',
    },
  },
  render: (form) => {
    const handleReset = () => {
      form.reset();
    };

    return (
      <>
        <Input
          className={styles.form__input}
          value={form.value.name}
          onChange={(e) => {
            // eslint-disable-next-line no-param-reassign
            form.value.name = e.target.value;
          }}
        />
        <Button onClick={handleReset}>Reset</Button>
      </>
    );
  },
} as FormType;
