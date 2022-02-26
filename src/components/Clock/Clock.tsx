import React, { forwardRef, SVGAttributes } from 'react';
import * as S from './Clock.styled';
import EditHourMode from './EditHourMode';
import EditMinuteMode from './EditMinuteMode';
import ViewMode from './ViewMode';

type ClockMode = 'view' | 'edit-hour' | 'edit-minute';

export type Time = {
  hour: number;
  minute: number;
};

export type ClockProps = {
  clockMode?: ClockMode;
  time?: Time;
  onTimeChange?: (time: Time) => void;
} & SVGAttributes<SVGSVGElement>;

const Clock = forwardRef<SVGSVGElement, ClockProps>(
  (props: ClockProps, ref) => {
    const {
      clockMode,
      time,
      onTimeChange,
      ...passThrough
    } = props;

    const { hour, minute } = time as Time;
    const hourDeg = hour * 30;
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

        {clockMode === 'view' && <ViewMode hourDeg={hourDeg + (minute * 0.5)} minuteDeg={minuteDeg} />}
        {clockMode === 'edit-hour' && <EditHourMode hourDeg={hourDeg} />}
        {clockMode === 'edit-minute' && <EditMinuteMode minuteDeg={minuteDeg} />}
      </S.Clock>
    );
  },
);

Clock.displayName = 'Clock';
Clock.defaultProps = {
  clockMode: 'view',
  time: {
    hour: 12,
    minute: 0,
  },
  onTimeChange: undefined,
};

export default Clock;
