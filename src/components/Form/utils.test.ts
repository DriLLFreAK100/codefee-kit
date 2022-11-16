import { describe, test, expect, vi } from 'vitest';
import Form, { FormDefinition } from './utils';

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
});
