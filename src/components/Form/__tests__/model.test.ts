import { describe, test, expect, vi } from 'vitest';
import { VirtualForm, defineForm } from '../model';
import { FormDefinition, FormValidationProcessingResult } from '../common';

describe('VirtualForm', () => {
  test('should be able to declare initial value', () => {
    const form = defineForm({ initialValue: { name: 'codefeetime' } });
    expect(form.value).toEqual({ name: 'codefeetime' });
  });

  test('should be able to reset form', () => {
    const form = defineForm({ initialValue: { name: 'codefeetime' } });
    form.value.name = 'something';

    expect(form.value).toEqual({ name: 'something' });
    form.reset();
    expect(form.value).toEqual({ name: 'codefeetime' });
  });

  test('should be able to reset empty form', () => {
    const form = defineForm({});
    form.value.name = 'something';

    expect(form.value).toEqual({ name: 'something' });
    form.reset();
    expect(form.value).toEqual({});
  });

  test('should be able to detect if the form value is modified', () => {
    const form = defineForm({ initialValue: { name: 'codefeetime' } });
    form.value.name = 'something';

    expect(form.isTouched).toBeTruthy();
    form.reset();
    expect(form.isTouched).toBeFalsy();
  });

  test('should be able to callback when value changes', () => {
    const mock = {
      initialValue: { name: 'codefeetime' },
      onChange: vi.fn(),
    };

    const form = defineForm({
      initialValue: mock.initialValue,
      onChange: mock.onChange as FormDefinition<
        typeof mock.initialValue
      >['onChange'],
    });

    mock.onChange = mock.onChange.mockImplementationOnce((x) => {
      expect(x).toEqual({ name: 'something' });
    });

    form.value.name = 'something';
  });

  test('should be able to pass validation for valid form', async () => {
    const form = defineForm({
      initialValue: {
        name: 'codefeetime',
      },
      rules: {
        name: (value) => !!value,
      },
    });

    expect(await form.validate()).toEqual<FormValidationProcessingResult>({
      isValid: true,
      result: {
        name: true,
      },
    });
  });

  test('should be able to fail validation for invalid form', async () => {
    const form = defineForm({
      initialValue: {
        name: 'codefeetime',
        contact: '',
      },
      rules: {
        name: (value) => !!value,
        contact: (value) => !!value,
      },
    });

    expect(await form.validate()).toEqual<FormValidationProcessingResult>({
      isValid: false,
      result: {
        name: true,
        contact: false,
      },
    });
  });

  describe('Nested VirtualForm', () => {
    test('should be able to nest form within form', () => {
      const form = defineForm({
        initialValue: {
          name: 'codefeetime',
          address: defineForm({
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
      const form = defineForm({
        initialValue: {
          name: 'codefeetime',
          address: defineForm({
            initialValue: {
              postalCode: 123456,
              country: defineForm({
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

      expect(res).toEqual<FormValidationProcessingResult>({
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

describe('defineForm', () => {
  test('should be able produce VirtualForm object', () => {
    const form = defineForm({ initialValue: { name: 'codefeetime' } });
    expect(form.value).toEqual({ name: 'codefeetime' });
    expect(form instanceof VirtualForm).toBeTruthy();
  });
});
