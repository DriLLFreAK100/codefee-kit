import React, { FC, forwardRef, HtmlHTMLAttributes } from 'react';
import * as S from './TimePanel.styled';
import ClockVariant from './ClockVariant';
import InputVariant from './InputVariant';
import { TimeInputProps, TimeInputVariant } from './Common';

export const switchInputVariant = (
  type: TimeInputVariant
): FC<TimeInputProps> => {
  switch (type) {
    case 'input':
      return InputVariant;
    case 'clock':
      return ClockVariant;
    default:
      return ClockVariant;
  }
};

export type TimePanelProps = {
  inputVariant?: TimeInputVariant;
} & TimeInputProps &
  HtmlHTMLAttributes<HTMLDivElement>;

const TimePanel = forwardRef<HTMLDivElement, TimePanelProps>(
  (props: TimePanelProps, ref) => {
    const {
      inputVariant,
      time,
      onTimeChange,
      onHourChange,
      onMinuteChange,
      ...passThrough
    } = props;

    const InputComponent = switchInputVariant(inputVariant as TimeInputVariant);

    return (
      <S.TimePanel ref={ref} {...passThrough}>
        <InputComponent
          time={time}
          onTimeChange={onTimeChange}
          onHourChange={onHourChange}
          onMinuteChange={onMinuteChange}
          {...passThrough}
        />
      </S.TimePanel>
    );
  }
);

TimePanel.displayName = 'TimePanel';
TimePanel.defaultProps = {
  inputVariant: 'input',
  time: {
    hours: 12,
    minutes: 0,
  },
  onTimeChange: undefined,
};

export default TimePanel;
