import { ClockMode } from 'components/Clock';
import React, { FC, useEffect, useState } from 'react';
import { Time } from 'utils/TimeHelper';
import { TimeInputProps } from './Common';
import * as S from './TimePanel.styled';

const toggleClockMode = (mode: ClockMode): ClockMode => (mode === 'edit-hour' ? 'edit-minute' : 'edit-hour');

const ClockVariant: FC<TimeInputProps> = ({
  time,
  onTimeChange,
}: TimeInputProps) => {
  const [clockMode, setClockMode] = useState<ClockMode>('edit-hour');
  const [internalTime, setInternalTime] = useState<Time | undefined>(time);

  useEffect(() => setInternalTime(time), [time]);

  const handleOnTimeChange = (value: Time) => {
    if (clockMode === 'edit-hour') {
      setInternalTime(value);
    } else {
      onTimeChange?.(value);
    }

    setClockMode(toggleClockMode(clockMode));
  };

  return (
    <S.ClockContainer>
      <S.Clock
        clockMode={clockMode}
        time={internalTime}
        onTimeChange={handleOnTimeChange}
      />
    </S.ClockContainer>
  );
};

export default ClockVariant;
