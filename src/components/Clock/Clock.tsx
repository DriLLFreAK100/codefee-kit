import { switchComponents } from 'utils/ConditionHelper';
import React, {
  forwardRef, MouseEvent, SVGAttributes, useCallback, useLayoutEffect, useRef, useState,
} from 'react';
import { calcAngle, roundByStep } from 'utils/MathHelper';
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
    const isDragging = useRef(false);
    const canDrag = ['edit-hour', 'edit-minute'].includes(clockMode as ClockMode);

    const centerDotEl = useRef<SVGCircleElement>(null);

    const { hours, minutes, seconds } = internalTime as Time;
    const hourDeg = normalizeHour(hours) * 30;
    const minuteDeg = minutes * 6 + (((seconds || 0) / 60) * 6);
    const secondsDeg = (seconds || 0) * 6;

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

    const handleStartDrag = useCallback((evt: MouseEvent<SVGCircleElement>) => {
      if (canDrag) {
        isDragging.current = true;
      }
    }, [canDrag]);

    const handleDragging = useCallback(({ clientX, clientY }: MouseEvent<SVGCircleElement>) => {
      if (canDrag && centerDotEl.current && isDragging.current) {
        const {
          x, y, right, bottom,
        } = centerDotEl.current.getBoundingClientRect();

        const cX = x + ((right - x) / 2);
        const cY = y + ((bottom - y) / 2);

        const angle = calcAngle(
          { x: cX, y: cY },
          { x: cX, y: cY - 20 },
          { x: clientX, y: clientY },
        );

        const relativeHour = (roundByStep(angle, 30) / 30);
        console.log(relativeHour === 0 ? 12 : relativeHour);
      }
    }, [canDrag]);

    const handleEndDrag = useCallback((evt: MouseEvent<SVGCircleElement>) => {
      if (canDrag) {
        isDragging.current = false;
      }
    }, [canDrag]);

    const getViewContent = (isRealtime = false) => (
      <ViewMode
        hourDeg={hourDeg + (minutes * 0.5)}
        minuteDeg={minuteDeg}
        secondsDeg={secondsDeg}
        viewStyle={viewStyle}
        isRealtime={isRealtime}
      />
    );

    const clockContent = switchComponents(clockMode as ClockMode, {
      view: getViewContent(),
      'view-realtime': getViewContent(true),
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

    useLayoutEffect(() => {
      setInternalTime(time);
    }, [time]);

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
            onMouseDown={handleStartDrag}
            onMouseMove={handleDragging}
            onMouseUp={handleEndDrag}
          />

          <S.CenterDot
            ref={centerDotEl}
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
