import { Time } from 'components/Clock';
import React, {
  forwardRef, HtmlHTMLAttributes,
} from 'react';
import * as S from './TimePanel.styled';

export type TimePanelProps = {
  time?: Time;
  onTimeChange?: (time: Time) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const TimePanel = forwardRef<HTMLDivElement, TimePanelProps>(
  (props: TimePanelProps, ref) => {
    const {
      time,
      onTimeChange,
      ...passThrough
    } = props;
    return (
      <S.TimePanel
        ref={ref}
        {...passThrough}
      />
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
