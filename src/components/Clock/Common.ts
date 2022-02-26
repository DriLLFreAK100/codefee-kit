import { fillArray } from 'utils/ArrayHelper';

export type ClockMode = 'view' | 'edit-hour' | 'edit-minute';

export type ViewStyle = 'line' | 'hourText';

export type Time = {
  hour: number;
  minute: number;
};

export const clockMarks = fillArray(12);
