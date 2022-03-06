import { ButtonGroupButton } from 'components/ButtonGroup';
import { TimePeriod } from 'utils/TimeHelper';

export type AmPmButton = ButtonGroupButton<TimePeriod>;

export const makeAmPmButtons = (hour: number): ButtonGroupButton<TimePeriod>[] => [
  { id: 1, content: 'AM', selected: hour < 12 },
  { id: 2, content: 'PM', selected: hour >= 12 },
];
