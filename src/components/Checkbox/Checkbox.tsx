import { Gutter } from 'common';
import React, {
  ChangeEvent, forwardRef, HtmlHTMLAttributes, useCallback,
} from 'react';
import * as S from './Checkbox.style';

export interface CheckboxProps extends HtmlHTMLAttributes<HTMLLabelElement> {
  checked: boolean;
  disabled?: boolean;
  gutterBottom?: Gutter;
  inputProps?: HtmlHTMLAttributes<HTMLInputElement>,
  label?: string;
  onValueChange?: (checked: boolean) => void;
}

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const {
      checked,
      disabled,
      gutterBottom,
      inputProps,
      label,
      onValueChange,
      ...passThrough
    } = props;

    const handleOnChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(evt.target.checked);
    }, [onValueChange]);

    return (
      <S.Checkbox
        ref={ref}
        disabled={disabled}
        gutterBottom={gutterBottom as Gutter}
        {...passThrough}
      >
        <S.Input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleOnChange}
          {...inputProps}
        />
        <S.Label type="body2">
          {label}
        </S.Label>
        <S.Checkmark
          checked={checked}
          disabled={disabled}
        />
      </S.Checkbox>
    );
  },
);

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
  disabled: false,
  gutterBottom: 12,
  inputProps: undefined,
  label: '',
  onValueChange: undefined,
};

export default Checkbox;
