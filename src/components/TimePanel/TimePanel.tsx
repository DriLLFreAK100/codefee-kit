import ButtonGroup from 'components/ButtonGroup';
import EasyTime, { Time, TimeUnit } from 'utils/TimeHelper';
import React, {
  ChangeEvent,
  forwardRef, HtmlHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import { AmPmButton, makeAmPmButtons } from './Common';
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

    const easyTime = new EasyTime(time);
    const isInputing = useRef(false);

    const {
      normalizedHours: hours,
      hoursString,
      minutes,
      minutesString,
    } = easyTime;

    const [timePeriod, setTimePeriod] = useState(easyTime.getTimePeriod());
    const [hourValue, setHourValue] = useState<number | string>(hoursString);
    const [minuteValue, setMinuteValue] = useState<number | string>(minutesString);
    const amPmButtons: AmPmButton[] = makeAmPmButtons(timePeriod);

    useEffect(() => {
      if (!isInputing.current) {
        setHourValue(hoursString);
        setMinuteValue(minutesString);
      }
    }, [hoursString, minutesString]);

    const handleAmPmClick = ({ content }: AmPmButton) => {
      setTimePeriod(content);
      onTimeChange?.(easyTime.setPeriod(content).clonedValue);
    };

    const handleHoursChange = (val: number) => {
      if (val > 12) return;

      easyTime.setHoursWithTimePeriod(val, timePeriod);
      setHourValue(val);
      onTimeChange?.(easyTime.clonedValue);
    };

    const handleMinutesChange = (val: number) => {
      if (val > 59) return;
      easyTime.setMinutes(val);
      onTimeChange?.(easyTime.clonedValue);
      setMinuteValue(easyTime.minutes);
    };

    const handleHoursMinutesChange = (unit: TimeUnit) => (evt: ChangeEvent<HTMLInputElement>) => {
      const val = parseInt(evt.target.value || '0', 10);

      if (unit === 'hour') {
        handleHoursChange(val);
        return;
      }

      handleMinutesChange(val);
    };

    const handleOnFocus = (unit: TimeUnit) => () => {
      isInputing.current = true;

      if (unit === 'hour') {
        setHourValue(hours);
        return;
      }
      setMinuteValue(minutes);
    };

    const handleOnBlur = (unit: TimeUnit) => () => {
      isInputing.current = false;

      if (unit === 'hour') {
        setHourValue(hoursString);
        return;
      }
      setMinuteValue(minutesString);
    };

    return (
      <S.TimePanel
        ref={ref}
        {...passThrough}
      >
        <S.InputBar>
          <S.HourMinuteGroup>
            <S.HourInput
              value={hourValue}
              onFocus={handleOnFocus('hour')}
              onBlur={handleOnBlur('hour')}
              onChange={handleHoursMinutesChange('hour')}
            />

            <S.HourMinuteColon>:</S.HourMinuteColon>

            <S.MinuteInput
              value={minuteValue}
              onFocus={handleOnFocus('minute')}
              onBlur={handleOnBlur('minute')}
              onChange={handleHoursMinutesChange('minute')}
            />
          </S.HourMinuteGroup>

          <ButtonGroup
            buttons={amPmButtons}
            onButtonClick={handleAmPmClick}
          />
        </S.InputBar>

        <S.ClockContainer>
          <S.Clock time={{
            hours,
            minutes,
          }}
          />
        </S.ClockContainer>
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
