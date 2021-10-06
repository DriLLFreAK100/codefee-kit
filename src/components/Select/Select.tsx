import React, {
  forwardRef,
  ReactNode,
  useState,
} from 'react';
import * as S from './Select.style';
import SelectLayout from './SelectLayout';
import { SelectOptionType } from './Common';

export interface SelectProps {
  options: SelectOptionType[];
  selected?: SelectOptionType;
  onChange: (option: SelectOptionType) => void;
  optionTemplate?: (option: SelectOptionType, props: SelectProps) => ReactNode;
  selectedTemplate?: (selected: SelectOptionType | undefined, props: SelectProps) => ReactNode;
}

const Select = forwardRef(
  (props: SelectProps, ref) => {
    const {
      options,
      selected,
      onChange,
      optionTemplate,
      selectedTemplate,
    } = props;

    const [open, setOpen] = useState(false);

    const handleOnClickOption = (option: SelectOptionType): void => {
      if (selected !== option) {
        onChange(option);
      }

      setOpen(false);
    };

    return (
      <SelectLayout
        ref={ref}
        open={open}
        setOpen={setOpen}
        selectedDisplay={(
          <S.Label type="subtitle1">
            {selectedTemplate?.(selected, props)}
          </S.Label>
        )}
        optionNodes={(
          <ul>
            {
              options.map((option) => (
                <S.Option
                  key={option.id}
                  onClick={() => handleOnClickOption(option)}
                >
                  {optionTemplate?.(option, props)}
                </S.Option>
              ))
            }
          </ul>
        )}
      />
    );
  },
);

Select.displayName = 'Select';
Select.defaultProps = {
  optionTemplate: (option: SelectOptionType) => option.label as ReactNode,
  selectedTemplate: (option: SelectOptionType) => option?.label as ReactNode,
};

export default Select;
