import ButtonGroup from 'components/ButtonGroup';
import { ClockMode } from 'components/Clock';
import React, { FC, useState } from 'react';
import EasyTime, { Time, TimePeriod } from 'utils/TimeHelper';
import { AmPmButton, makeAmPmButtons, TimeInputProps } from './Common';
import * as S from './TimePanel.styled';

const toggleClockMode = (mode: ClockMode): ClockMode => (mode === 'edit-hour' ? 'edit-minute' : 'edit-hour');

const normalizeTime = (
  value: Time,
  timePeriod: TimePeriod,
) => new EasyTime(value).setValueWithTimePeriod(value, timePeriod).value;

const ClockVariant: FC<TimeInputProps> = ({
  time,
  onTimeChange,
}: TimeInputProps) => {
  const easyTime = new EasyTime(time);

  const {
    hoursString,
    minutesString,
  } = easyTime;

  const [clockMode, setClockMode] = useState<ClockMode>('edit-hour');
  const [timePeriod, setTimePeriod] = useState(easyTime.getTimePeriod());
  const amPmButtons: AmPmButton[] = makeAmPmButtons(timePeriod);

  const handleAmPmClick = ({ content }: AmPmButton) => {
    setTimePeriod(content);
    onTimeChange?.(easyTime.setPeriod(content).clonedValue);
  };

  const handleOnTimeChange = (value: Time) => {
    onTimeChange?.(normalizeTime(value, timePeriod));
    setClockMode(toggleClockMode(clockMode));
  };

  const handleOnClickHour = () => setClockMode('edit-hour');

  const handleOnClickMinute = () => setClockMode('edit-minute');

  return (
    <>
      <S.InputBar>
        <S.HourMinuteGroup>
          <S.HourButton
            isActive={clockMode === 'edit-hour'}
            onClick={handleOnClickHour}
          >
            {hoursString}
          </S.HourButton>
          <S.HourMinuteColon>:</S.HourMinuteColon>
          <S.MinuteButton
            isActive={clockMode === 'edit-minute'}
            onClick={handleOnClickMinute}
          >
            {minutesString}
          </S.MinuteButton>
        </S.HourMinuteGroup>

        <ButtonGroup
          buttons={amPmButtons}
          onButtonClick={handleAmPmClick}
        />
      </S.InputBar>

      <S.ClockContainer>
        <S.Clock
          clockMode={clockMode}
          time={time}
          onTimeChange={handleOnTimeChange}
        />
      </S.ClockContainer>
    </>
  );
};

export default ClockVariant;
