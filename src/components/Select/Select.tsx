import React, { forwardRef, SelectHTMLAttributes, ReactNode } from 'react';
import * as S from './Select.style';

export interface SelectOptionRequiredType {
  id: number | string;
}

export type SelectOptionType = { [key: string]: unknown } & SelectOptionRequiredType;

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptionType[];
  getOptionLabel?: (option: SelectOptionType) => ReactNode;
  getOptionValue?: (option: SelectOptionType) => unknown;
  template?: (item: SelectOptionType, props: SelectProps) => HTMLOptionElement;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props: SelectProps, ref) => {
  const {
    options,
    getOptionLabel,
    getOptionValue,
    ...passThrough
  } = props;

  return (
    <S.Select
      ref={ref}
      {...passThrough}
    >
      {options.map((option) => (
        <S.Option
          key={option.id}
          value={getOptionValue?.(option) as string}
        >
          {getOptionLabel?.(option)}
        </S.Option>
      ))}
    </S.Select>
  );
});

Select.displayName = 'Select';
Select.defaultProps = {
  getOptionLabel: (option) => option.label as ReactNode,
  getOptionValue: (option) => option.value,
  template: undefined,
};

export default Select;
