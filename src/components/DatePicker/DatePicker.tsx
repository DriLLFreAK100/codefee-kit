import EasyDate from 'utils/DateHelper';
import Input from 'components/Input';
import useHasValueChanged from 'hooks/useHasValueChanged';
import { Calendar } from 'components/Icons';
import { CalendarPanelOptions } from 'components/CalendarPanel';
import React, {
  ChangeEvent, forwardRef, HtmlHTMLAttributes, useEffect, useState,
} from 'react';
import { isValidDate, sanitizeDateInput } from './Common';
import Picker from './Picker';
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
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<EasyDate | undefined>(undefined);
    const [inputValue, setInputValue] = useState('');
    const isTouched = useHasValueChanged(inputValue);

    const closeDateSelector = () => setOpen(false);

    useEffect(() => {
      if (date) {
        const value = new EasyDate(date);
        setSelectedDate(value);
        setInputValue(value.format('MM/dd/yyyy'));
      }
    }, [date]);

    const handleDateChange = (value: Date) => {
      onDateChange?.(value);
      setOpen(false);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(sanitizeDateInput(e.currentTarget.value, inputValue));
    };

    const handleInputBlur = () => {
      onDateChange?.(isValidDate(inputValue) ? new Date(inputValue) : undefined);
    };

    return (
      <Picker
        ref={ref}
        open={open}
        input={(
          <Input
            placeholder={placeholder}
            value={inputValue}
            error={isTouched && !isValidDate(inputValue)}
            onFocus={closeDateSelector}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        )}
        selector={(
          <S.DateSelector
            date={selectedDate?.value}
            onDateChange={handleDateChange}
            {...calendarPanelOptions}
          />
        )}
        icon={<Calendar />}
        setOpen={setOpen}
        {...passThrough}
      />
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
