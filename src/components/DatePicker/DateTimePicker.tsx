import EasyDate from 'utils/DateHelper';
import useHasValueChanged from 'hooks/useHasValueChanged';
import { Calendar } from 'components/Icons';
import { CalendarPanelOptions } from 'components/CalendarPanel';
import React, {
  ChangeEvent, forwardRef, HtmlHTMLAttributes, useEffect, useState,
} from 'react';
import { isValidDate, sanitizeDateTimeInput } from './Common';
import DateTimeSelector from './DateTimeSelector';
import * as S from './DateTimePicker.styled';

export type DateTimePickerProps = {
  dateTime?: Date;
  placeholder?: string;
  calendarPanelOptions?: CalendarPanelOptions;
  onDateTimeChange?: (dateTime?: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const DateTimePicker = forwardRef<HTMLDivElement, DateTimePickerProps>(
  (props: DateTimePickerProps, ref) => {
    const {
      dateTime,
      placeholder,
      calendarPanelOptions,
      onDateTimeChange,
      ...passThrough
    } = props;

    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState<EasyDate | undefined>(undefined);
    const isTouched = useHasValueChanged(inputValue);

    const closeTimeSelector = () => setOpen(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(sanitizeDateTimeInput(e.currentTarget.value, inputValue));
    };

    const handleInputBlur = () => {
      onDateTimeChange?.(isValidDate(inputValue) ? new Date(inputValue) : undefined);
    };

    const updateDateTime = (value?: Date) => {
      const value$ = new EasyDate(value);
      setSelectedDateTime(value$);
      setInputValue(value$.format('MM/dd/yyyy hh:mm ampm'));
    };

    const handleMinuteChange = (value: Date) => {
      onDateTimeChange?.(value);
      closeTimeSelector();
    };

    useEffect(() => {
      if (dateTime) {
        updateDateTime(dateTime);
      }
    }, [dateTime]);

    return (
      <S.Picker
        ref={ref}
        open={open}
        input={(
          <S.DateTimeInput
            placeholder={placeholder}
            value={inputValue}
            error={isTouched && !isValidDate(inputValue)}
            onFocus={closeTimeSelector}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        )}
        selector={(
          <DateTimeSelector
            dateTime={selectedDateTime}
            calendarPanelOptions={calendarPanelOptions}
            onDateChange={updateDateTime}
            onTimeChange={updateDateTime}
            onMinuteChange={handleMinuteChange}
          />
        )}
        icon={<Calendar />}
        setOpen={setOpen}
        onClose={handleInputBlur}
        {...passThrough}
      />
    );
  },
);

DateTimePicker.displayName = 'DateTimePicker';
DateTimePicker.defaultProps = {
  dateTime: undefined,
  placeholder: 'mm/dd/yyyy hh:mm (am|pm)',
  calendarPanelOptions: undefined,
  onDateTimeChange: undefined,
};

export default DateTimePicker;
