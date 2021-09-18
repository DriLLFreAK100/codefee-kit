import { ListObjectRequiredProps } from 'common/Interfaces';
import useClickOutside from 'hooks/useClickOutside';
import useExposeRef from 'hooks/useExposeRef';
import React, {
  forwardRef,
  ReactNode,
  useState,
  useRef,
  useCallback,
} from 'react';
import * as S from './Select.style';

export type SelectOptionType =
  { [key: string]: unknown }
  & ListObjectRequiredProps<number | string>;

export interface SelectProps {
  options: SelectOptionType[];
  selected?: SelectOptionType;
  multiselect?: boolean;
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

    const hostRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const handleClickOutside = useCallback(() => {
      if (open) {
        setOpen(false);
      }
    }, [open]);

    const handleOnClickSelect = (): void => {
      setOpen(!open);
    };

    const handleOnClickOption = (option: SelectOptionType): void => {
      if (selected !== option) {
        onChange(option);
      }

      setOpen(false);
    };

    useClickOutside(hostRef, handleClickOutside);
    useExposeRef(ref, hostRef);

    return (
      <S.Host ref={hostRef}>
        <S.Select onClick={handleOnClickSelect}>
          <S.Label type="subtitle1">
            {selectedTemplate?.(selected, props)}
          </S.Label>
          <S.AngleIcon open={open} />
        </S.Select>
        <S.OptionContainer open={open}>
          {options.map((option) => (
            <S.Option
              key={option.id}
              onClick={() => handleOnClickOption(option)}
            >
              {optionTemplate?.(option, props)}
            </S.Option>
          ))}
        </S.OptionContainer>
      </S.Host>
    );
  },
);

Select.displayName = 'Select';
Select.defaultProps = {
  optionTemplate: (option: SelectOptionType) => option.label as ReactNode,
  selectedTemplate: (option: SelectOptionType) => option?.label as ReactNode,
};

export default Select;
