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
  getOptionLabel?: (option?: SelectOptionType) => ReactNode;
  getOptionValue?: (option?: SelectOptionType) => unknown;
  template?: (option: SelectOptionType, props: SelectProps) => HTMLOptionElement;
}

const Select: ForwardRefExoticComponent<SelectProps> = forwardRef(
  (props: SelectProps, ref) => {
    const {
      options,
      selected,
      getOptionLabel,
      getOptionValue,
      onChange,
      ...passThrough
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
      <S.Host
        ref={selectRef}
        {...passThrough}
      >
        <S.Select onClick={handleOnClickSelect}>
          <S.Label type="subtitle1">
            {getOptionLabel?.(selected)}
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
                  {getOptionLabel?.(option)}
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
  getOptionLabel: (option) => option?.label as ReactNode,
  getOptionValue: (option) => option?.value,
  template: undefined,
};

export default Select;
