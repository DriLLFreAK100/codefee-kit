import React, { forwardRef, ReactNode, useState } from 'react';
import * as S from './Multiselect.style';
import { SelectOptionType } from './Interfaces';

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

const DefaultOptionTemplate = (
  option: SelectOptionType,
  { selected }: MultiselectProps,
): ReactNode => {
  const { label } = option;

  return (
    <S.CheckboxOption
      gutterBottom={0}
      checked={selected?.includes(option) || false}
      label={label as string}
    />
  );
};

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
    };

    return (
      <S.MultiselectLayout
        ref={ref}
        open={open}
        setOpen={setOpen}
        selectedDisplay={(
          <S.Label type="subtitle1">
            {selectedTemplate?.(selected, props)}
          </S.Label>
        )}
        optionNodes={[
          <S.HeaderControlsLayout key="selection-header">
            <S.OptionsControl>
              <S.OptionsControlText type="button">Unselect All</S.OptionsControlText>
            </S.OptionsControl>
            <S.OptionsControl>
              <S.OptionsControlText type="button">Select All</S.OptionsControlText>
            </S.OptionsControl>
          </S.HeaderControlsLayout>,
          <ul key="selection-nodes">
            {
              options.map((option) => (
                <S.MultiselectOption
                  key={option.id}
                  onClick={() => handleOnClickOption(option)}
                >
                  {optionTemplate?.(option, props)}
                </S.MultiselectOption>
              ))
            }
          </ul>,
          <S.FooterControlsLayout key="selection-footer">
            <S.OptionsControl>
              <S.OptionsControlText type="button">Cancel</S.OptionsControlText>
            </S.OptionsControl>
            <S.OptionsControl>
              <S.OptionsControlText type="button">Apply</S.OptionsControlText>
            </S.OptionsControl>
          </S.FooterControlsLayout>,
        ]}
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
