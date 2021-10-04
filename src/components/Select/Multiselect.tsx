import React, {
  forwardRef, ReactNode, useCallback, useEffect, useState,
} from 'react';
import * as S from './Multiselect.style';
import { SelectOptionType } from './Interfaces';

export interface MultiselectProps {
  options: SelectOptionType[];
  selected?: SelectOptionType[];
  onChange: (options: SelectOptionType[]) => void;
  optionTemplate?: (
    option: SelectOptionType,
    internalSelected: SelectOptionType[],
    props: MultiselectProps,
  ) => ReactNode;
  selectedTemplate?: (
    selected: SelectOptionType[] | undefined,
    props: MultiselectProps,
  ) => ReactNode;
}

const DefaultSelectedTemplate = (options: SelectOptionType[]): ReactNode => `${options?.length || 0} selected`;

const DefaultOptionTemplate = (
  option: SelectOptionType,
  internalSelected: SelectOptionType[],
): ReactNode => {
  const { label } = option;

  return (
    <S.CheckboxOption
      gutterBottom={0}
      checked={internalSelected.includes(option) || false}
      label={label as string}
    />
  );
};

interface HeaderControlsLayoutProps {
  onUnselectAll: () => void;
  onSelectAll: () => void;
}

const HeaderControlsLayout = ({
  onUnselectAll,
  onSelectAll,
}: HeaderControlsLayoutProps) => (
  <S.HeaderControlsLayout>
    <S.ControlButton onClick={onUnselectAll}>
      <S.ControlButtonText type="button">
        Unselect All
      </S.ControlButtonText>
    </S.ControlButton>
    <S.ControlButton onClick={onSelectAll}>
      <S.ControlButtonText type="button">
        Select All
      </S.ControlButtonText>
    </S.ControlButton>
  </S.HeaderControlsLayout>
);

interface FooterControlsLayoutProps {
  onCancel: () => void;
  onApply: () => void;
}

const FooterControlsLayout = ({
  onCancel,
  onApply,
}: FooterControlsLayoutProps) => (
  <S.FooterControlsLayout>
    <S.ControlButton onClick={onCancel}>
      <S.ControlButtonText type="button">
        Cancel
      </S.ControlButtonText>
    </S.ControlButton>
    <S.ControlButton onClick={onApply}>
      <S.ControlButtonText type="button">
        Apply
      </S.ControlButtonText>
    </S.ControlButton>
  </S.FooterControlsLayout>
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
    const [internalSelected, setInternalSelected] = useState<SelectOptionType[]>([]);

    const handleOnClickOption = useCallback((option: SelectOptionType) => () => {
      if (internalSelected?.includes(option)) {
        setInternalSelected(internalSelected.filter((s) => s !== option));
        return;
      }

      setInternalSelected([
        ...internalSelected,
        option,
      ]);
    }, [internalSelected]);

    const handleUnselectAll = () => {
      setInternalSelected([]);
    };

    const handleSelectAll = () => {
      setInternalSelected(options);
    };

    const handleCancel = useCallback(() => {
      setInternalSelected(selected as SelectOptionType[]);
      setOpen(false);
    }, [selected]);

    const handleApply = () => {
      onChange(internalSelected);
      setOpen(false);
    };

    useEffect(() => {
      setInternalSelected(selected as SelectOptionType[]);
    }, [selected]);

    return (
      <S.MultiselectLayout
        ref={ref}
        open={open}
        setOpen={setOpen}
        selectedDisplay={(
          <S.Label type="subtitle1">
            {selectedTemplate?.(internalSelected, props)}
          </S.Label>
        )}
        optionNodes={[
          <HeaderControlsLayout
            key="selection-header"
            onUnselectAll={handleUnselectAll}
            onSelectAll={handleSelectAll}
          />,
          <ul key="selection-nodes">
            {
              options.map((option) => (
                <S.MultiselectOption
                  key={option.id}
                  onClick={handleOnClickOption(option)}
                >
                  {optionTemplate?.(option, internalSelected, props)}
                </S.MultiselectOption>
              ))
            }
          </ul>,
          <FooterControlsLayout
            key="selection-footer"
            onCancel={handleCancel}
            onApply={handleApply}
          />,
        ]}
        onClickOutside={handleCancel}
      />
    );
  },
);

Multiselect.displayName = 'Multiselect';
Multiselect.defaultProps = {
  selected: [],
  optionTemplate: DefaultOptionTemplate,
  selectedTemplate: DefaultSelectedTemplate,
};

export default Multiselect;
