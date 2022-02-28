/* eslint-disable import/prefer-default-export */
import { ButtonGroupButton } from 'components/ButtonGroup';

export const makeAmPmButtons = (hour: number): ButtonGroupButton[] => [
  { id: 1, content: 'AM', selected: hour < 12 },
  { id: 2, content: 'PM', selected: hour >= 12 },
];
