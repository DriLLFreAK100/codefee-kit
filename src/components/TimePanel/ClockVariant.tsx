import ButtonGroup from 'components/ButtonGroup';
import React, { FC, useState } from 'react';
import { ClockMode } from 'components/Clock';
import { EasyTime, Time, TimePeriod } from 'utils/TimeHelper';
import { AmPmButton, makeAmPmButtons, TimeInputProps } from './Common';
import * as S from './TimePanel.styled';

const toggleClockMode = (mode: ClockMode): ClockMode =>
  mode === 'edit-hour' ? 'edit-minute' : 'edit-hour';

const normalizeTime = (value: Time, timePeriod: TimePeriod) =>
  new EasyTime(value).setValueWithTimePeriod(value, timePeriod).value;

const ClockVariant: FC<TimeInputProps> = ({
  time,
  onTimeChange,
  onHourChange,
  onMinuteChange,
}: TimeInputProps) => {
  const easyTime = new EasyTime(time);

  const { hoursString, minutesString } = easyTime;

  const [clockMode, setClockMode] = useState<ClockMode>('edit-hour');
  const [timePeriod, setTimePeriod] = useState(easyTime.timePeriod);
  const amPmButtons: AmPmButton[] = makeAmPmButtons(timePeriod);

  const handleAmPmClick = ({ content }: AmPmButton) => {
    setTimePeriod(content);
    onTimeChange?.(easyTime.setPeriod(content).clonedValue);
  };

  const handleTimeChange = (value: Time) => {
    onTimeChange?.(normalizeTime(value, timePeriod));
  };

  const handleHourChange = (value: Time) => {
    onHourChange?.(value);
    setClockMode(toggleClockMode(clockMode));
    handleTimeChange(value);
  };

  const handleMinuteChange = (value: Time) => {
    onMinuteChange?.(value);
    handleTimeChange(value);
  };

  const handlClickHour = () => setClockMode('edit-hour');

  const handleClickMinute = () => setClockMode('edit-minute');

  return (
    <>
      <S.InputBar>
        <S.HourMinuteGroup>
          <S.HourButton
            type="button"
            isActive={clockMode === 'edit-hour'}
            onClick={handlClickHour}
          >
            {hoursString}
          </S.HourButton>
          <S.HourMinuteColon>:</S.HourMinuteColon>
          <S.MinuteButton
            type="button"
            isActive={clockMode === 'edit-minute'}
            onClick={handleClickMinute}
          >
            {minutesString}
          </S.MinuteButton>
        </S.HourMinuteGroup>

        <ButtonGroup buttons={amPmButtons} onButtonClick={handleAmPmClick} />
      </S.InputBar>

      <S.ClockContainer>
        <S.Clock
          clockMode={clockMode}
          time={time}
          onHourChange={handleHourChange}
          onMinuteChange={handleMinuteChange}
        />
      </S.ClockContainer>
    </>
  );
};

export default ClockVariant;
