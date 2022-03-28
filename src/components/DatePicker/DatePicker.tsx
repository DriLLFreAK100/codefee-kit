import EasyDate from 'utils/DateHelper';
import { CalendarPanelOptions } from 'components/CalendarPanel';
import React, {
  ChangeEvent, forwardRef, HtmlHTMLAttributes, useEffect, useState,
} from 'react';
import useHasValueChanged from 'hooks/useHasValueChanged';
import * as S from './DatePicker.styled';
import Picker from './Picker';
import { isValidDate, sanitizeInput } from './Common';

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
      setInputValue(sanitizeInput(e.currentTarget.value, inputValue));
    };

    const handleInputBlur = () => {
      if (isValidDate(inputValue)) {
        onDateChange?.(new Date(inputValue));
        return;
      }

      onDateChange?.(undefined);
    };

    return (
      <Picker
        ref={ref}
        open={open}
        renderInput={() => (
          <S.DateInput
            placeholder={placeholder}
            value={inputValue}
            error={isTouched && !isValidDate(inputValue)}
            onFocus={closeDateSelector}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        )}
        renderSelector={() => (
          <S.DateSelector
            date={selectedDate?.value}
            onDateChange={handleDateChange}
            {...calendarPanelOptions}
          />
        )}
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
