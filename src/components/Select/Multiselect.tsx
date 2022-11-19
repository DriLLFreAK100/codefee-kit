import React, {
  forwardRef,
  HtmlHTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import * as S from './Multiselect.styled';
import { SelectOptionType } from './Common';
import { SelectLayoutProps } from './SelectLayout';

export interface MultiselectControlLabels {
  UnselectAll: ReactNode;
  SelectAll: ReactNode;
  Cancel: ReactNode;
  Apply: ReactNode;
}

export type MultiselectProps = {
  controlLabels?: MultiselectControlLabels;
  options: SelectOptionType[];
  selected?: SelectOptionType[];
  onSelectedChange: (options: SelectOptionType[]) => void;
  optionTemplate?: (
    option: SelectOptionType,
    internalSelected: SelectOptionType[],
    props: MultiselectProps
  ) => ReactNode;
  selectedTemplate?: (
    selected: SelectOptionType[] | undefined,
    props: MultiselectProps
  ) => ReactNode;
} & Partial<SelectLayoutProps> &
  HtmlHTMLAttributes<HTMLDivElement>;

export const DefaultSelectedTemplate = (
  options: SelectOptionType[]
): ReactNode => `${options?.length || 0} selected`;

export const DefaultOptionTemplate = (
  option: SelectOptionType,
  internalSelected: SelectOptionType[]
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

export interface HeaderControlsLayoutProps {
  labels: MultiselectControlLabels;
  onUnselectAll: () => void;
  onSelectAll: () => void;
}

export const HeaderControlsLayout = ({
  labels,
  onUnselectAll,
  onSelectAll,
}: HeaderControlsLayoutProps): JSX.Element => {
  const { UnselectAll, SelectAll } = labels;

  return (
    <S.HeaderControlsLayout>
      <S.ControlButton onClick={onUnselectAll}>
        <S.ControlButtonText type="button">{UnselectAll}</S.ControlButtonText>
      </S.ControlButton>
      <S.ControlButton onClick={onSelectAll}>
        <S.ControlButtonText type="button">{SelectAll}</S.ControlButtonText>
      </S.ControlButton>
    </S.HeaderControlsLayout>
  );
};

export interface FooterControlsLayoutProps {
  labels: MultiselectControlLabels;
  onCancel: () => void;
  onApply: () => void;
}

export const FooterControlsLayout = ({
  labels,
  onCancel,
  onApply,
}: FooterControlsLayoutProps): JSX.Element => {
  const { Cancel, Apply } = labels;

  return (
    <S.FooterControlsLayout>
      <S.ControlButton onClick={onCancel}>
        <S.ControlButtonText type="button">{Cancel}</S.ControlButtonText>
      </S.ControlButton>
      <S.ControlButton onClick={onApply}>
        <S.ControlButtonText type="button">{Apply}</S.ControlButtonText>
      </S.ControlButton>
    </S.FooterControlsLayout>
  );
};

const Multiselect = forwardRef<HTMLDivElement, MultiselectProps>(
  (props: MultiselectProps, ref) => {
    const {
      controlLabels,
      options,
      selected,
      onSelectedChange,
      optionTemplate,
      selectedTemplate,
      ...passThrough
    } = props;

    const [open, setOpen] = useState(false);
    const [internalSelected, setInternalSelected] = useState<
      SelectOptionType[]
    >([]);

    const handleOnClickOption = useCallback(
      (option: SelectOptionType) => () => {
        if (internalSelected?.includes(option)) {
          setInternalSelected(internalSelected.filter((s) => s !== option));
          return;
        }

        setInternalSelected([...internalSelected, option]);
      },
      [internalSelected]
    );

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
      onSelectedChange(internalSelected);
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
        selectedDisplay={
          <S.Label type="subtitle1">
            {selectedTemplate?.(internalSelected, props)}
          </S.Label>
        }
        optionNodes={[
          <HeaderControlsLayout
            key="selection-header"
            labels={controlLabels as MultiselectControlLabels}
            onUnselectAll={handleUnselectAll}
            onSelectAll={handleSelectAll}
          />,
          <ul key="selection-nodes">
            {options.map((option) => (
              <S.MultiselectOption
                key={option.id}
                onClick={handleOnClickOption(option)}
              >
                {optionTemplate?.(option, internalSelected, props)}
              </S.MultiselectOption>
            ))}
          </ul>,
          <FooterControlsLayout
            key="selection-footer"
            labels={controlLabels as MultiselectControlLabels}
            onCancel={handleCancel}
            onApply={handleApply}
          />,
        ]}
        onClickOutside={handleCancel}
        {...passThrough}
      />
    );
  }
);

Multiselect.displayName = 'Multiselect';
Multiselect.defaultProps = {
  controlLabels: {
    Apply: 'Apply',
    Cancel: 'Cancel',
    SelectAll: 'Select All',
    UnselectAll: 'Unselect All',
  },
  selected: [],
  optionTemplate: DefaultOptionTemplate,
  selectedTemplate: DefaultSelectedTemplate,
};

export default Multiselect;
