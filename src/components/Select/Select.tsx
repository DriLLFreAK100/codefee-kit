import React, {
  forwardRef,
  ReactNode,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  ForwardRefExoticComponent,
} from 'react';
import * as S from './Select.style';

export interface SelectOptionRequiredType {
  id: number | string;
}

export type SelectOptionType = { [key: string]: unknown } & SelectOptionRequiredType;

export interface SelectProps {
  options: SelectOptionType[];
  selected?: SelectOptionType;
  onChange: (option: SelectOptionType) => void;
  optionTemplate?: (option: SelectOptionType, props: SelectProps) => ReactNode;
  selectedTemplate?: (selected: SelectOptionType | undefined, props: SelectProps) => ReactNode;
}

const Select: ForwardRefExoticComponent<SelectProps> = forwardRef(
  (props: SelectProps, ref) => {
    const {
      options,
      selected,
      onChange,
      optionTemplate,
      selectedTemplate,
    } = props;

    const selectRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const handleOnClickSelect = (): void => {
      setOpen(!open);
    };

    const handleOnClickOption = (option: SelectOptionType): void => {
      onChange(option);
      setOpen(false);
    };

    useImperativeHandle(ref, () => ({
      focus: () => {
        selectRef?.current?.focus();
      },
      node: selectRef?.current,
    }), []);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (open && selectRef?.current && !selectRef?.current?.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, [ref, open]);

    return (
      <S.Host ref={selectRef}>
        <S.Select onClick={handleOnClickSelect}>
          <S.Label type="subtitle1">
            {selectedTemplate?.(selected, props)}
          </S.Label>
          <S.AngleIcon open={open} />
        </S.Select>
        {
          open && (
            <S.OptionContainer>
              {options.map((option) => (
                <S.Option
                  key={option.id}
                  onClick={() => handleOnClickOption(option)}
                >
                  {optionTemplate?.(option, props)}
                </S.Option>
              ))}
            </S.OptionContainer>
          )
        }
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
