import useHasValueChanged from 'hooks/useHasValueChanged';
import { Calendar } from 'components/Icons';
import React, {
  ChangeEvent, FC, forwardRef, HtmlHTMLAttributes, useEffect, useState,
} from 'react';
import EasyTime, { Time } from 'utils/TimeHelper';
import EasyDate from 'utils/DateHelper';
import { isValidDate, sanitizeDateTimeInput } from './Common';
import Picker from './Picker';
import * as S from './DateTimePicker.styled';

type DateTimeSelectorProps = {
  dateTime?: EasyDate;
  onDateChange?: (date?: Date) => void;
  onTimeChange?: (date?: Date) => void;
  onMinuteChange: (date?: Date) => void;
};

type DateOrTime = 'date' | 'time';

const DateTimeSelector: FC<DateTimeSelectorProps> = ({
  dateTime,
  onDateChange,
  onTimeChange,
  onMinuteChange,
}: DateTimeSelectorProps) => {
  const hours$ = dateTime?.value.getHours() || 0;
  const minutes$ = dateTime?.value.getMinutes() || 0;

  const [dateOrTime, setDateOrTime] = useState<DateOrTime>('date');

  const handleClickOption = (value: DateOrTime) => () => setDateOrTime(value);

  const handleDateChange = (date: Date) => {
    const val = new EasyDate(date).setHours(hours$).setMinutes(minutes$);
    onDateChange?.(val.value);
    setDateOrTime('time');
  };

  const handleTimeChange = (isMinute: boolean) => ({ hours, minutes }: Time) => {
    const val = dateTime?.setHours(hours).setMinutes(minutes);

    onTimeChange?.(val?.value);

    if (isMinute) {
      onMinuteChange?.(val?.value);
    }
  };

  const easyTime = new EasyTime({ hours: hours$, minutes: minutes$ });

  return (
    <S.DateTimeSelector>
      <S.OptionBar>
        <S.OptionButton
          isActive={dateOrTime === 'date'}
          onClick={handleClickOption('date')}
        >
          <Calendar />
        </S.OptionButton>
        <S.OptionButton
          isActive={dateOrTime === 'time'}
          onClick={handleClickOption('time')}
        >
          <S.ClockIcon />
        </S.OptionButton>
      </S.OptionBar>

      {dateOrTime === 'date' ? (
        <S.DateSelector
          date={dateTime?.value}
          onDateChange={handleDateChange}
        />
      ) : (
        <S.TimeSelector
          inputVariant="clock"
          time={easyTime.value}
          onTimeChange={handleTimeChange(false)}
          onMinuteChange={handleTimeChange(true)}
        />
      )}
    </S.DateTimeSelector>
  );
};

DateTimeSelector.defaultProps = {
  dateTime: undefined,
  onDateChange: undefined,
  onTimeChange: undefined,
};

export type DateTimePickerProps = {
  dateTime?: Date;
  placeholder?: string;
  onDateTimeChange?: (dateTime?: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const DateTimePicker = forwardRef<HTMLDivElement, DateTimePickerProps>(
  (props: DateTimePickerProps, ref) => {
    const {
      dateTime,
      placeholder,
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
      <Picker
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
  onDateTimeChange: undefined,
};

export default DateTimePicker;
