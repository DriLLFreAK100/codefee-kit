import React, {
  forwardRef,
  HtmlHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import * as S from './Select.styled';
import SelectLayout, { SelectLayoutProps } from './SelectLayout';
import { SelectOptionType } from './Common';

export type SelectProps = {
  options: SelectOptionType[];
  selected?: SelectOptionType;
  onSelectedChange: (option: SelectOptionType) => void;
  optionTemplate?: (option: SelectOptionType, props: SelectProps) => ReactNode;
  selectedTemplate?: (
    selected: SelectOptionType | undefined,
    props: SelectProps
  ) => ReactNode;
} & Partial<SelectLayoutProps> &
  HtmlHTMLAttributes<HTMLDivElement>;

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (props: SelectProps, ref) => {
    const {
      options,
      selected,
      onSelectedChange,
      optionTemplate,
      selectedTemplate,
      ...passThrough
    } = props;

    const [open, setOpen] = useState(false);

    const handleOnClickOption = (option: SelectOptionType): void => {
      if (selected !== option) {
        onSelectedChange(option);
      }

      setOpen(false);
    };

    return (
      <SelectLayout
        ref={ref}
        open={open}
        setOpen={setOpen}
        selectedDisplay={
          <S.Label type="subtitle1">
            {selectedTemplate?.(selected, props)}
          </S.Label>
        }
        optionNodes={
          <ul>
            {options.map((option) => (
              <S.Option
                key={option.id}
                onClick={() => handleOnClickOption(option)}
              >
                {optionTemplate?.(option, props)}
              </S.Option>
            ))}
          </ul>
        }
        {...passThrough}
      />
    );
  }
);

Select.displayName = 'Select';
Select.defaultProps = {
  optionTemplate: (option: SelectOptionType) => option.label as ReactNode,
  selectedTemplate: (option: SelectOptionType) => option?.label as ReactNode,
};

export default Select;
