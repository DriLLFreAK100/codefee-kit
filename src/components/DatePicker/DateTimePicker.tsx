import useHasValueChanged from 'hooks/useHasValueChanged';
import { Calendar } from 'components/Icons';
import { CalendarPanelOptions } from 'components/CalendarPanel';
import { EasyDate } from 'utils/DateHelper';
import React, {
  ChangeEvent,
  forwardRef,
  HtmlHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { isValidDate, sanitizeDateTimeInput } from './Common';
import Picker from './Picker';
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
    const [selectedDateTime, setSelectedDateTime] =
      useState<EasyDate | undefined>(undefined);
    const isTouched = useHasValueChanged(inputValue);

    const closeDateTimeSelector = () => setOpen(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(sanitizeDateTimeInput(e.currentTarget.value, inputValue));
    };

    const handleInputBlur = () => {
      onDateTimeChange?.(
        isValidDate(inputValue) ? new Date(inputValue) : undefined
      );
    };

    const updateDateTime = (value?: Date) => {
      if (value) {
        const value$ = new EasyDate(value);
        setSelectedDateTime(value$);
        setInputValue(value$.format('MM/dd/yyyy hh:mm ampm'));
        return;
      }

      setSelectedDateTime(undefined);
      setInputValue('');
    };

    const handleMinuteChange = (value: Date) => updateDateTime(value);

    const handleClickOk = () => {
      onDateTimeChange?.(selectedDateTime?.value);
      closeDateTimeSelector();
    };

    const handleClickOutside = () => {
      // Revert internal states to initial states
      updateDateTime(dateTime);
      closeDateTimeSelector();
    };

    useEffect(() => updateDateTime(dateTime), [dateTime]);

    return (
      <Picker
        ref={ref}
        open={open}
        input={
          <S.DateTimeInput
            placeholder={placeholder}
            value={inputValue}
            error={isTouched && !isValidDate(inputValue)}
            onFocus={closeDateTimeSelector}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        }
        selector={
          <DateTimeSelector
            dateTime={selectedDateTime}
            calendarPanelOptions={calendarPanelOptions}
            onDateChange={updateDateTime}
            onTimeChange={updateDateTime}
            onMinuteChange={handleMinuteChange}
          />
        }
        icon={<Calendar />}
        setOpen={setOpen}
        hasFooterControls
        onOk={handleClickOk}
        onCancel={handleClickOutside}
        onClose={handleClickOutside}
        {...passThrough}
      />
    );
  }
);

DateTimePicker.displayName = 'DateTimePicker';
DateTimePicker.defaultProps = {
  dateTime: undefined,
  placeholder: 'mm/dd/yyyy hh:mm (am|pm)',
  calendarPanelOptions: undefined,
  onDateTimeChange: undefined,
};

export default DateTimePicker;
