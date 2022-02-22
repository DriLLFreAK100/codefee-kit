import { fillArray } from 'utils/ArrayHelper';
import React, { forwardRef, HtmlHTMLAttributes } from 'react';
import * as S from './TimePanel.styled';

export type Time = {
  hour: number;
  minute: number;
};

export type TimePanelProps = {
  onTimeChange: (time: Time) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const hourMarks = fillArray(12);

const TimePanel = forwardRef<HTMLDivElement, TimePanelProps>(
  (props: TimePanelProps, ref) => (
    <S.TimePanel ref={ref}>
      <S.Clock
        width="268"
        height="268"
        viewBox="0 0 600 600"
      >
        <S.ClockFrame
          cx="300"
          cy="300"
          r="296"
        />

        <S.HourMarkGroup>
          {hourMarks.map((i) => (
            <S.HourMark
              key={i}
              hour={i}
              x1="0"
              x2="280"
              y1="0"
              y2="0"
            />
          ))}
        </S.HourMarkGroup>

        {/* <S.HourMark x1="300" x2="300" y1="16" y2="56" />
          <S.HourMark x1="584" x2="544" y1="300" y2="300" />
          <S.HourMark x1="300" x2="300" y1="584" y2="544" />
          <S.HourMark x1="16" x2="56" y1="300" y2="300" /> */}
        {/* <S.CenterDot className="mid-circle" cx="300" cy="300" r="16.2" /> */}

        {/* <g id="hour">
          <path className="hour-arm" d="M300.5 298V142" />
          <circle className="sizing-box" cx="300" cy="300" r="253.9" />
        </g>
        <g id="minute">
          <path className="minute-arm" d="M300.5 298V67" />
          <circle className="sizing-box" cx="300" cy="300" r="253.9" />
        </g>
        <g id="second">
          <path className="second-arm" d="M300.5 350V55" />
          <circle className="sizing-box" cx="300" cy="300" r="253.9" />
        </g> */}
      </S.Clock>
    </S.TimePanel>
  ),
);

TimePanel.displayName = 'TimePanel';
TimePanel.defaultProps = {
};

export default TimePanel;
