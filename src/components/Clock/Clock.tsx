import React, {
  forwardRef, SVGAttributes, useCallback, useLayoutEffect, useState,
} from 'react';
import { Time } from 'utils/TimeHelper';
import * as S from './Clock.styled';
import EditHourMode from './EditHourMode';
import EditMinuteMode from './EditMinuteMode';
import ViewMode from './ViewMode';
import {
  ClockMode,
  computeRealtimeClock,
  defaultHourMarks,
  defaultMinuteMarks,
  normalizeHour,
  switchMode,
  ViewStyle,
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

    const [internalTime, setInternalTime] = useState(time);
    const [centerDotEl, setCenterDotEl] = useState<SVGCircleElement | null>();

    const { hours, minutes, seconds } = internalTime as Time;
    const hourDeg = normalizeHour(hours) * 30;
    const minuteDeg = minutes * 6 + (((seconds || 0) / 60) * 6);
    const secondsDeg = (seconds || 0) * 6;

    const handleCenterDotRef = useCallback((el: SVGCircleElement | null) => setCenterDotEl(el), []);

    const handleOnMinuteChange = useCallback((minutes$: number) => {
      onTimeChange?.({
        hours,
        minutes: minutes$,
      });
    }, [hours, onTimeChange]);

    const handleOnHourChange = useCallback((hour$: number) => {
      onTimeChange?.({
        hours: hour$,
        minutes,
      });
    }, [minutes, onTimeChange]);

    const getViewContent = (isRealtime = false) => (
      <ViewMode
        hourDeg={hourDeg + (minutes * 0.5)}
        minuteDeg={minuteDeg}
        secondsDeg={secondsDeg}
        viewStyle={viewStyle}
        isRealtime={isRealtime}
      />
    );

    const clockContent = switchMode(clockMode as ClockMode,
      () => getViewContent(),
      () => getViewContent(true),
      () => (
        <EditHourMode
          centerDomRect={centerDotEl?.getBoundingClientRect()}
          hourDeg={hourDeg}
          hourMarks={hourMarks as string[]}
          onHourChange={handleOnHourChange}
        />
      ),
      () => (
        <EditMinuteMode
          centerDomRect={centerDotEl?.getBoundingClientRect()}
          minuteDeg={minuteDeg}
          minuteMarks={minuteMarks as string[]}
          onMinuteChange={handleOnMinuteChange}
        />
      ));

    useLayoutEffect(() => setInternalTime(time), [time]);

    useLayoutEffect(() => {
      if (clockMode === 'view-realtime') {
        computeRealtimeClock(setInternalTime);
      }
    }, [clockMode]);

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
            ref={handleCenterDotRef}
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
    hours: 12,
    minutes: 0,
  },
  viewStyle: 'line',
  onTimeChange: undefined,
};

export default Clock;
