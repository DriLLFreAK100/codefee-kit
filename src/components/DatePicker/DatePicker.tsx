import EasyDate from 'utils/DateHelper';
import useClickOutside from 'hooks/useClickOutside';
import useExposeRef from 'hooks/useExposeRef';
import { Calendar } from 'components/Icons';
import React, {
  ChangeEvent, forwardRef, HtmlHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import { CalendarPanelOptions } from 'components/CalendarPanel';
import { isValidDate, sanitizeInput } from './Common';
import * as S from './DatePicker.styled';

export type DatePickerProps = {
  date?: Date;
  placeholder?: string;
  calendarPanelOptions?: CalendarPanelOptions;
  onDateChange?: (date?: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props: DatePickerProps, ref) => {
    const {
      date,
      placeholder,
      calendarPanelOptions,
      onDateChange,
      ...passThrough
    } = props;

    const hostRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<EasyDate | undefined>(new EasyDate(date));
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
      const value = new EasyDate(date);
      setSelectedDate(value);
      setInputValue(value.format('MM/dd/yyyy'));
    }, [date]);

    const closeDateSelector = () => {
      setOpen(false);
    };

    const handleClickCalendarButton = () => {
      setOpen(true);
    };

    const handleOnDateChange = (value: Date) => {
      onDateChange?.(value);
      closeDateSelector();
    };

    const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(sanitizeInput(e.currentTarget.value, inputValue));
    };

    const handleInputOnBlur = () => {
      if (isValidDate(inputValue)) {
        onDateChange?.(new Date(inputValue));
        return;
      }

      onDateChange?.(undefined);
    };

    useExposeRef(ref, hostRef);
    useClickOutside(hostRef, closeDateSelector);

    return (
      <S.DatePicker
        ref={hostRef}
        {...passThrough}
      >
        <S.InputGroup>
          <S.DateInput
            placeholder={placeholder}
            value={inputValue}
            error={!isValidDate(inputValue)}
            onFocus={closeDateSelector}
            onBlur={handleInputOnBlur}
            onChange={handleInputOnChange}
          />
          <S.CalendarButton onClick={handleClickCalendarButton}>
            <Calendar />
          </S.CalendarButton>
        </S.InputGroup>

        {open && (
          <S.DateSelector
            date={selectedDate?.value}
            onDateChange={handleOnDateChange}
            {...calendarPanelOptions}
          />
        )}
      </S.DatePicker>
    );
  },
);

DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
  date: undefined,
  placeholder: 'mm/dd/yyyy',
  calendarPanelOptions: undefined,
  onDateChange: undefined,
};

export default DatePicker;
