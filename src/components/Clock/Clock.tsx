import React, { forwardRef, SVGAttributes, useState } from 'react';
import * as S from './Clock.styled';
import EditHourMode from './EditHourMode';
import ViewMode from './ViewMode';

type ClockMode = 'view' | 'edit-hour' | 'edit-minute';

export type Time = {
  hour: number;
  minute: number;
};

export type ClockProps = {
  time?: Time;
  onTimeChange?: (time: Time) => void;
} & SVGAttributes<SVGSVGElement>;

const Clock = forwardRef<SVGSVGElement, ClockProps>(
  (props: ClockProps, ref) => {
    const {
      time,
      onTimeChange,
      ...passThrough
    } = props;

    const [clockMode] = useState<ClockMode>('edit-hour');

    const { hour, minute } = time as Time;
    const hourDeg = hour * 30 + (minute * 0.5);
    const minuteDeg = minute * 6;

    return (
      <S.Clock
        ref={ref}
        width="268"
        height="268"
        viewBox="0 0 600 600"
        {...passThrough}
      >
        <g>
          <S.ClockFrame
            cx="300"
            cy="300"
            r="296"
          />

          <S.CenterDot
            cx="300"
            cy="300"
            r="16"
          />
        </g>

        {clockMode === 'view' && <ViewMode hourDeg={hourDeg} minuteDeg={minuteDeg} />}
        {clockMode === 'edit-hour' && <EditHourMode hourDeg={hourDeg} />}
      </S.Clock>
    );
  },
);

Clock.displayName = 'Clock';
Clock.defaultProps = {
  time: {
    hour: 12,
    minute: 0,
  },
  onTimeChange: undefined,
};

export default Clock;
