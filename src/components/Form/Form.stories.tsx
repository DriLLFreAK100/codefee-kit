/* eslint-disable react/display-name */
import Form, { FormProps } from 'components/Form';
import React from 'react';
import { Meta, Story } from '@storybook/react';
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
  definition: [
    {
      render: (props: any) => <input {...props} />,
      key: 'name',
    },
    {
      render: (props: any) => <input {...props} />,
      key: 'email',
    },
    {
      render: (props: any) => <input {...props} />,
      key: 'age',
    },
  ],
} as FormType;
