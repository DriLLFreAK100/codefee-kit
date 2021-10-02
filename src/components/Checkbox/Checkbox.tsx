import React, {
  ChangeEvent, forwardRef, HtmlHTMLAttributes, useCallback,
} from 'react';
import * as S from './Checkbox.style';

export interface CheckboxProps extends HtmlHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  name: string;
  onValueChange?: (checked: boolean) => void;
}

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const {
      checked,
      disabled,
      label,
      name,
      onValueChange,
      ...passThrough
    } = props;

    const handleOnChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(evt.target.checked);
    }, [onValueChange]);

    return (
      <S.Checkbox
        htmlFor={name}
        ref={ref}
        disabled={disabled}
      >
        <S.Input
          type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={handleOnChange}
          {...passThrough}
        />
        <S.Label>
          {label}
        </S.Label>
        <S.Checkmark checked={checked} />
      </S.Checkbox>
    );
  },
);

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
  label: '',
  onValueChange: undefined,
};

export default Checkbox;
