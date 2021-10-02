import React, { forwardRef, ReactNode, useState } from 'react';
import BaseSelect from './BaseSelect';
import { SelectOptionType } from './Interfaces';
import * as S from './Select.style';

export interface MultiselectProps {
  options: SelectOptionType[];
  selected?: SelectOptionType[];
  onChange: (options: SelectOptionType[]) => void;
  optionTemplate?: (option: SelectOptionType, props: MultiselectProps) => ReactNode;
  selectedTemplate?: (
    selected: SelectOptionType[] | undefined,
    props: MultiselectProps,
  ) => ReactNode;
}

const DefaultSelectedTemplate = (options: SelectOptionType[]): ReactNode => `${options?.length || 0} selected`;

const DefaultOptionTemplate = ({ label }: SelectOptionType): ReactNode => (
  <div>
    {label as ReactNode}
  </div>
);

const Multiselect = forwardRef(
  (props: MultiselectProps, ref) => {
    const {
      options,
      selected,
      onChange,
      optionTemplate,
      selectedTemplate,
    } = props;

    const [open, setOpen] = useState(false);

    const handleOnClickOption = (option: SelectOptionType): void => {
      if (selected?.includes(option)) {
        onChange(selected.filter((s) => s !== option));
      } else {
        onChange([
          ...selected as SelectOptionType[],
          option,
        ]);
      }

      setOpen(false);
    };

    return (
      <BaseSelect
        ref={ref}
        open={open}
        setOpen={setOpen}
        selectedDisplay={(
          <S.Label type="subtitle1">
            {selectedTemplate?.(selected, props)}
          </S.Label>
        )}
        optionNodes={options.map((option) => (
          <S.Option
            key={option.id}
            onClick={() => handleOnClickOption(option)}
          >
            {optionTemplate?.(option, props)}
          </S.Option>
        ))}
      />
    );
  },
);

Multiselect.displayName = 'Multiselect';
Multiselect.defaultProps = {
  optionTemplate: DefaultOptionTemplate,
  selectedTemplate: DefaultSelectedTemplate,
};

export default Multiselect;
