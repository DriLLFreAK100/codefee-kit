import { describe, test, expect, vi } from 'vitest';
import Form, { FormDefinition, FormValidationResult } from './utils';

describe('Form', () => {
  test('should be able to declare initial value', () => {
    const form = new Form({ initialValue: { name: 'codefeetime' } });
    expect(form.value).toEqual({ name: 'codefeetime' });
  });

  test('should be able to reset form', () => {
    const form = new Form({ initialValue: { name: 'codefeetime' } });
    form.value.name = 'something';

    expect(form.value).not.toEqual({ name: 'codefeetime' });
    form.reset();
    expect(form.value).toEqual({ name: 'codefeetime' });
  });

  test('should be able to detect if the form value is modified', () => {
    const form = new Form({ initialValue: { name: 'codefeetime' } });
    form.value.name = 'something';

    expect(form.isTouched).toBeTruthy();
    form.reset();
    expect(form.isTouched).toBeFalsy();
  });

  test('should be able to callback when value changes', () => {
    const mock = { initialValue: { name: 'codefeetime' }, onChange: vi.fn() };
    const spy = vi.spyOn(mock, 'onChange');

    const form = new Form({
      initialValue: mock.initialValue,
      onChange: mock.onChange as FormDefinition<
        typeof mock.initialValue
      >['onChange'],
    });

    form.value.name = 'something';

    expect(spy).toHaveBeenCalledOnce();
  });

  test('should be able to pass validation for valid form', async () => {
    const form = new Form({
      initialValue: {
        name: 'codefeetime',
      },
      rules: {
        name: (value) => !!value,
      },
    });

    expect(await form.validate()).toEqual<FormValidationResult>({
      isValid: true,
      result: {
        name: true,
      },
    });
  });

  test('should be able to fail validation for invalid form', async () => {
    const form = new Form({
      initialValue: {
        name: 'codefeetime',
        contact: '',
      },
      rules: {
        name: (value) => !!value,
        contact: (value) => !!value,
      },
    });

    expect(await form.validate()).toEqual<FormValidationResult>({
      isValid: false,
      result: {
        name: true,
        contact: false,
      },
    });
  });

  describe('Nested Form', () => {
    test('should be able to nest form within form', () => {
      const form = new Form({
        initialValue: {
          name: 'codefeetime',
          address: new Form({
            initialValue: { country: 'Malaysia', postalCode: 123456 },
          }),
        },
      });

      expect(form.value.address.value).toEqual({
        country: 'Malaysia',
        postalCode: 123456,
      });

      form.value.address.setValue({ country: 'Singapore', postalCode: 654321 });
      expect(form.isTouched).toBeTruthy();
      form.reset();
      expect(form.isTouched).toBeFalsy();
    });

    test('should be able to validation nested form', async () => {
      const form = new Form({
        initialValue: {
          name: 'codefeetime',
          address: new Form({
            initialValue: {
              postalCode: 123456,
              country: new Form({
                initialValue: { countryName: '' },
                rules: {
                  countryName: (val) => !!val,
                },
              }),
            },
            rules: {
              postalCode: (val) => typeof val === 'number',
            },
          }),
        },
      });

      const res = await form.validate();

      expect(res).toEqual<FormValidationResult>({
        isValid: false,
        result: {
          name: true,
          address: {
            isValid: false,
            result: {
              postalCode: true,
              country: {
                isValid: false,
                result: {
                  countryName: false,
                },
              },
            },
          },
        },
      });
    });
  });
});
