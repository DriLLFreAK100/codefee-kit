import React, { forwardRef, SVGAttributes, useCallback } from 'react';
import * as S from './Clock.styled';
import EditHourMode from './EditHourMode';
import EditMinuteMode from './EditMinuteMode';
import ViewMode from './ViewMode';
import { ClockMode, Time, ViewStyle } from './Common';

export type ClockProps = {
  clockMode?: ClockMode;
  time?: Time;
  viewStyle?: ViewStyle;
  onTimeChange?: (time: Time) => void;
} & SVGAttributes<SVGSVGElement>;

const Clock = forwardRef<SVGSVGElement, ClockProps>(
  (props: ClockProps, ref) => {
    const {
      clockMode,
      time,
      viewStyle,
      onTimeChange,
      ...passThrough
    } = props;

    const { hour, minute } = time as Time;
    const hourDeg = hour * 30;
    const minuteDeg = minute * 6;

    const handleOnMinuteChange = useCallback((minute$: number) => {
      onTimeChange?.({
        hour,
        minute: minute$,
      });
    }, [hour, onTimeChange]);

    const handleOnHourChange = useCallback((hour$: number) => {
      onTimeChange?.({
        hour: hour$,
        minute,
      });
    }, [minute, onTimeChange]);

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

        {clockMode === 'view' && (
          <ViewMode
            hourDeg={hourDeg + (minute * 0.5)}
            minuteDeg={minuteDeg}
            viewStyle={viewStyle}
          />
        )}

        {clockMode === 'edit-hour' && (
          <EditHourMode
            hourDeg={hourDeg}
            onHourChange={handleOnHourChange}
          />
        )}

        {clockMode === 'edit-minute' && (
          <EditMinuteMode
            minuteDeg={minuteDeg}
            onMinuteChange={handleOnMinuteChange}
          />
        )}
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
  viewStyle: 'line',
  onTimeChange: undefined,
};

export default Clock;
