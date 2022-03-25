import EasyDate from 'utils/DateHelper';
import { CalendarPanelOptions } from 'components/CalendarPanel';
import React, {
  ChangeEvent, forwardRef, HtmlHTMLAttributes, useEffect, useState,
} from 'react';
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

    useEffect(() => {
      if (date) {
        const value = new EasyDate(date);
        setSelectedDate(value);
        setInputValue(value.format('MM/dd/yyyy'));
      }
    }, [date]);

    const closeDateSelector = () => setOpen(false);
    const openSelector = () => setOpen(true);

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

    return (
      <Picker
        ref={ref}
        isSelectorOpen={open}
        onOpenSelector={openSelector}
        onCloseSelector={closeDateSelector}
        renderInput={() => (
          <S.DateInput
            placeholder={placeholder}
            value={inputValue}
            error={date && !isValidDate(inputValue)}
            onFocus={closeDateSelector}
            onBlur={handleInputOnBlur}
            onChange={handleInputOnChange}
          />
        )}
        renderSelector={() => (
          <S.DateSelector
            date={selectedDate?.value}
            onDateChange={handleOnDateChange}
            {...calendarPanelOptions}
          />
        )}
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
