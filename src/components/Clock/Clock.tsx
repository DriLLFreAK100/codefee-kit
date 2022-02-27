import React, { forwardRef, SVGAttributes, useCallback } from 'react';
import { switchComponents } from 'utils/ConditionHelper';
import * as S from './Clock.styled';
import EditHourMode from './EditHourMode';
import EditMinuteMode from './EditMinuteMode';
import ViewMode from './ViewMode';
import {
  ClockMode, defaultHourMarks, defaultMinuteMarks, Time, ViewStyle,
} from './Common';

export type ClockProps = {
  clockMode?: ClockMode;
  hourMarks?: string[],
  minuteMarks?: string[],
  time?: Time;
  viewStyle?: ViewStyle;
  onTimeChange?: (time: Time) => void;
} & SVGAttributes<SVGSVGElement>;

const Clock = forwardRef<SVGSVGElement, ClockProps>(
  (props: ClockProps, ref) => {
    const {
      clockMode,
      hourMarks,
      minuteMarks,
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

    const clockContent = switchComponents(clockMode as ClockMode, {
      view: <ViewMode
        hourDeg={hourDeg + (minute * 0.5)}
        minuteDeg={minuteDeg}
        viewStyle={viewStyle}
      />,
      'edit-hour': <EditHourMode
        hourDeg={hourDeg}
        hourMarks={hourMarks as string[]}
        onHourChange={handleOnHourChange}
      />,
      'edit-minute': <EditMinuteMode
        minuteDeg={minuteDeg}
        minuteMarks={minuteMarks as string[]}
        onMinuteChange={handleOnMinuteChange}
      />,
    });

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

        {clockContent}
      </S.Clock>
    );
  },
);

Clock.displayName = 'Clock';
Clock.defaultProps = {
  clockMode: 'view',
  hourMarks: defaultHourMarks,
  minuteMarks: defaultMinuteMarks,
  time: {
    hour: 12,
    minute: 0,
  },
  viewStyle: 'line',
  onTimeChange: undefined,
};

export default Clock;
