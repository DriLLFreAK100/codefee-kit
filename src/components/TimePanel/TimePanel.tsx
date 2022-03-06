import ButtonGroup from 'components/ButtonGroup';
import EasyTime, { Time, TimeUnit } from 'utils/TimeHelper';
import React, {
  ChangeEvent,
  forwardRef, HtmlHTMLAttributes, useCallback, useEffect, useMemo, useState,
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

    const easyTime = useMemo(() => new EasyTime(time), [time]);

    const {
      hours,
      hoursString,
      minutes,
      minutesString,
    } = easyTime;

    const amPmButtons: AmPmButton[] = makeAmPmButtons(hours);

    const [hourValue, setHourValue] = useState<number | string>(hoursString);
    const [minuteValue, setMinuteValue] = useState<number | string>(minutesString);

    useEffect(() => {
      setHourValue(hoursString);
      setMinuteValue(minutesString);
    }, [hoursString, minutesString]);

    const handleAmPmClick = useCallback(({ content }: AmPmButton) => {
      onTimeChange?.(easyTime.setPeriod(content).clonedValue);
    }, [easyTime, onTimeChange]);

    const handleHoursMinutesChange = useCallback(
      (unit: TimeUnit) => (evt: ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(evt.target.value || '0', 10);

        if (unit === 'hour') {
          const newVal = easyTime.setHours(val).clonedValue;
          onTimeChange?.(newVal);
          setHourValue(newVal.hours);
          return;
        }

        const newVal = easyTime.setMinutes(val).clonedValue;
        onTimeChange?.(newVal);
        setMinuteValue(newVal.minutes);
      },
      [easyTime, onTimeChange],
    );

    const handleOnFocus = useCallback((unit: TimeUnit) => () => {
      if (unit === 'hour') {
        setHourValue(hours);
        return;
      }
      setMinuteValue(minutes);
    }, [hours, minutes]);

    const handleOnBlur = useCallback((unit: TimeUnit) => () => {
      if (unit === 'hour') {
        setHourValue(hoursString);
        return;
      }
      setMinuteValue(minutesString);
    }, [hoursString, minutesString]);

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
