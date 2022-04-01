import EasyTime, { Time } from 'utils/TimeHelper';
import React, { FC, useState } from 'react';
import { CalendarPanelOptions } from 'components/CalendarPanel';
import EasyDate from 'utils/DateHelper';
import { Calendar } from 'components/Icons';
import * as S from './DateTimeSelector.styled';

type DateTimeSelectorProps = {
  dateTime?: EasyDate;
  calendarPanelOptions?: CalendarPanelOptions;
  onDateChange?: (date?: Date) => void;
  onTimeChange?: (date?: Date) => void;
  onMinuteChange: (date?: Date) => void;
};

type DateOrTime = 'date' | 'time';

const DateTimeSelector: FC<DateTimeSelectorProps> = ({
  dateTime,
  calendarPanelOptions,
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
          {...calendarPanelOptions}
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
  calendarPanelOptions: undefined,
  onDateChange: undefined,
  onTimeChange: undefined,
};

export default DateTimeSelector;
