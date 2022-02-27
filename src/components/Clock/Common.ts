import { fillArray } from 'utils/ArrayHelper';

export type ClockMode = 'view' | 'edit-hour' | 'edit-minute';

export type ViewStyle = 'line' | 'hourText';

export type Time = {
  hour: number;
  minute: number;
};

export const clockMarks: number[] = fillArray(12);

export const defaultHourMarks: string[] = fillArray(12, (i) => (i === 0 ? 12 : i).toString());

export const defaultMinuteMarks: string[] = fillArray(
  12,
  (i) => (i === 0 ? (60).toString() : (i * 5).toString().padStart(2, '0')),
);
