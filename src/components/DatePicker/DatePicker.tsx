import React, {
  forwardRef, HtmlHTMLAttributes, useEffect, useState,
} from 'react';
import { Calendar } from 'components/Icons';
import * as S from './DatePicker.styled';

export type DatePickerProps = {
  placeholder?: string;
  onDateChange?: (date: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props: DatePickerProps, ref) => {
    const {
      placeholder,
      ...passThrough
    } = props;
    const [open, setOpen] = useState(false);

    const handleOnFocus = () => {

    };

    const closeDateSelector = () => {
      setOpen(!open);
    };

    const handleClickCalendarButton = () => {
      closeDateSelector();
    };

    useEffect(() => {
      // Logic to handle click outside
    }, []);

    return (
      <S.DatePicker
        ref={ref}
        {...passThrough}
      >
        <S.InputGroup>
          <S.DateInput
            onFocus={handleOnFocus}
            placeholder={placeholder}
            {...props}
          />
          <S.CalendarButton onClick={handleClickCalendarButton}>
            <Calendar />
          </S.CalendarButton>
        </S.InputGroup>

        {open && <S.DateSelector />}
      </S.DatePicker>
    );
  },
);

DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
  placeholder: 'dd/mm/yyyy',
  onDateChange: undefined,
};

export default DatePicker;
