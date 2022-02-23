import { fillArray } from 'utils/ArrayHelper';
import React, { forwardRef, HtmlHTMLAttributes } from 'react';
import * as S from './TimePanel.styled';

export type Time = {
  hour: number;
  minute: number;
};

export type TimePanelProps = {
  time?: Time;
  onTimeChange?: (time: Time) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const hourMarks = fillArray(12);

const TimePanel = forwardRef<HTMLDivElement, TimePanelProps>(
  (props: TimePanelProps, ref) => {
    const {
      time,
      onTimeChange,
      ...passThrough
    } = props;

    const { hour, minute } = time as Time;
    const hourDeg = hour * 30 + (minute * 0.5);
    const minuteDeg = minute * 6;

    return (
      <S.TimePanel
        ref={ref}
        {...passThrough}
      >
        <S.Clock
          width="268"
          height="268"
          viewBox="0 0 600 600"
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

          <S.CenterGroup>
            {hourMarks.map((i) => (
              <S.HourMark
                key={i}
                hour={i}
                x1="0"
                x2="0"
                y1="0"
                y2="-280"
              />
            ))}
          </S.CenterGroup>

          <S.CenterGroup>
            <S.HourArm
              x1="0"
              x2="0"
              y1="0"
              y2="-160"
              transform={`rotate(${hourDeg})`}
            />

            <S.MinuteArm
              x1="0"
              x2="0"
              y1="0"
              y2="-220"
              transform={`rotate(${minuteDeg})`}
            />
          </S.CenterGroup>
        </S.Clock>
      </S.TimePanel>
    );
  },
);

TimePanel.displayName = 'TimePanel';
TimePanel.defaultProps = {
  time: {
    hour: 12,
    minute: 0,
  },
  onTimeChange: undefined,
};

export default TimePanel;
