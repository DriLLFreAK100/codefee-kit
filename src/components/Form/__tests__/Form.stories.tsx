/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'components/Button';
import Input from 'components/Input';
import Form, { FormProps } from 'components/Form';
import { Select, SelectOptionType } from 'components/Select';
import { Typography } from 'components/Typography';
import styles from './Form.stories.module.scss';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Form',
  component: Form,
} as Meta;

type FormType = FormProps<{
  name: string;
  rating: SelectOptionType;
}>;

const ratings: SelectOptionType[] = [1, 2, 3, 4, 5].map((x) => ({
  id: x,
  label: x,
  value: x,
}));

const Template: Story<FormType> = (args: FormType) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  formDef: {
    initialValue: {
      name: 'codefeetime',
    },
  },
  onSubmit: (val) => {
    action('onSubmit')(val);
  },
  render: (form) => {
    const handleReset = () => {
      form.reset();
    };

    return (
      <>
        <div className={styles.form__ctrl}>
          <Input
            className={styles['form__ctrl-item']}
            label="Name"
            value={form.value.name}
            onChange={(e) => {
              form.setValue({ ...form.value, name: e.target.value });
            }}
          />

          <Select
            className={styles['form__ctrl-item']}
            label="Rating"
            selected={form.value.rating}
            options={ratings}
            onSelectedChange={(v) => {
              form.setValue({ ...form.value, rating: v });
            }}
          />
        </div>

        <div className={styles.form__btns}>
          <Button onClick={handleReset} variant="subtle">
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>

        <hr />
        <pre>
          <Typography>
            FormValue: {JSON.stringify(form.value, undefined, 4)}
          </Typography>
        </pre>
      </>
    );
  },
} as FormType;
