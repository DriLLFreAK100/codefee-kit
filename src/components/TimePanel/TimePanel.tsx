import Clock, { Time } from 'components/Clock';
import { ButtonGroupButton } from 'components/ButtonGroup';
import React, {
  forwardRef, HtmlHTMLAttributes, useCallback, useState,
} from 'react';
import EasyDate from 'utils/DateHelper';
import { makeAmPmButtons } from './Common';
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

    const [{
      hours,
      hoursString,
      minutes,
      minutesString,
    }] = useState(new EasyDate());

    const [amPmStates, setAmPmStates] = useState(makeAmPmButtons(hours));

    const clockDisplayTime: Time = {
      hours,
      minutes,
    };

    const handleAmPmClick = useCallback((btn: ButtonGroupButton) => {
      setAmPmStates(amPmStates.map((a) => ({ ...a, selected: a.id === btn.id })));
    }, [amPmStates]);

    return (
      <S.TimePanel
        ref={ref}
        {...passThrough}
      >
        <S.InputBar>
          <S.HourMinuteGroup>
            <S.HourInput value={hoursString} />
            <S.HourMinuteColon>:</S.HourMinuteColon>
            <S.MinuteInput value={minutesString} />
          </S.HourMinuteGroup>

          <S.AmPmButtonGroup
            buttons={amPmStates}
            onButtonClick={handleAmPmClick}
          />
        </S.InputBar>

        <Clock time={clockDisplayTime} />
      </S.TimePanel>
    );
  },
);

TimePanel.displayName = 'TimePanel';
TimePanel.defaultProps = {
  time: {
    hours: 12,
    minutes: 0,
  },
  onTimeChange: undefined,
};

export default TimePanel;
