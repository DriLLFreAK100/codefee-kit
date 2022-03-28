import { ButtonGroupButton } from 'components/ButtonGroup';
import { Time, TimePeriod } from 'utils/TimeHelper';

export type TimeInputProps = {
  time?: Time;
  onTimeChange?: (time: Time) => void;
};

export type TimeInputVariant = 'input' | 'clock';

export type AmPmButton = ButtonGroupButton<TimePeriod>;

export const makeAmPmButtons = (timePeriod: TimePeriod): ButtonGroupButton<TimePeriod>[] => [
  { id: 1, content: 'AM', selected: timePeriod === 'AM' },
  { id: 2, content: 'PM', selected: timePeriod === 'PM' },
];
