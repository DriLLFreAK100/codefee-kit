/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'components/Button';
import Input from 'components/Input';
import Form, { VirtualForm, FormProps } from 'components/Form';
import { Select, SelectOptionType } from 'components/Select';
import { Typography } from 'components/Typography';
import styles from './Form.stories.module.scss';
import { notEmptyString } from '../validators';
/* eslint-disable no-alert */

type FormValue = {
  name: string;
  description: string;
  rating: SelectOptionType;
};

type FormType = FormProps<FormValue>;

export default {
  title: 'Controls/Form',
  component: Form,
} as Meta<FormType>;

const ratings: SelectOptionType[] = [1, 2, 3, 4, 5].map((x) => ({
  id: x,
  label: x,
  value: x,
}));

const Template: Story<FormType> = (args: FormType) => <Form {...args} />;

const renderFormMeta = (form: VirtualForm<FormValue>) => (
  <pre>
    <Typography type="body2" subtle gutterBottom={12}>
      [form.value]: {JSON.stringify(form.value, undefined, 4)}
    </Typography>

    <Typography type="body2" subtle gutterBottom={12}>
      [form.isTouched]: {JSON.stringify(form.isTouched, undefined, 4)}
    </Typography>

    <Typography type="body2" subtle>
      [form.validationResult]:{' '}
      {JSON.stringify(form.validationResult, undefined, 4)}
    </Typography>
  </pre>
);

export const Primary = Template.bind({});
Primary.args = {
  formDef: {
    initialValue: {
      name: '',
      description: 'This is codefee-kit',
    },
    rules: {
      name: notEmptyString,
    },
  },
  onSubmit: (val) => {
    action('onSubmit')(val);
  },
  render: (form) => {
    const handleReset = () => {
      form.reset();
      action('reset')();
    };

    const handleValidate = async () => {
      await form.validate();
    };

    return (
      <>
        <div className={styles.form__ctrl}>
          <Input
            className={styles['form__ctrl-item']}
            label="Name (required)"
            error={form.hasError('name')}
            value={form.value.name}
            onChange={(e) => {
              form.setValue({ ...form.value, name: e.target.value });
            }}
          />

          <Input
            className={styles['form__ctrl-item']}
            label="Description"
            value={form.value.description}
            onChange={(e) => {
              form.setValue({ ...form.value, description: e.target.value });
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
          <Button variant="subtle" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="subtle" onClick={handleValidate}>
            Validate
          </Button>
          <Button type="submit">Submit</Button>
        </div>

        <hr />
        {renderFormMeta(form)}
      </>
    );
  },
} as FormType;
