import { ReactNode, SetStateAction } from 'react';
import { fillArray } from 'utils/ArrayHelper';
import { calcAngle, roundByStep } from 'utils/MathHelper';
import { Time } from 'utils/TimeHelper';

export type ClockMode = 'view' | 'view-realtime' | 'edit-hour' | 'edit-minute';

export type ViewStyle = 'line' | 'hourText';

export const clockMarks: number[] = fillArray(12);

export const minutesMarks: number[] = fillArray(60);

export const defaultHourMarks: string[] = fillArray(12, (i) =>
  (i === 0 ? 12 : i).toString()
);

export const defaultMinuteMarks: string[] = fillArray(12, (i) =>
  i === 0 ? (60).toString() : (i * 5).toString().padStart(2, '0')
);

export const markRadius = 252;

export const activeCircleRadius = 32;

export const computeRealtimeClock = (
  setState: (value: SetStateAction<Time>) => void
): void => {
  const curr = new Date();

  setState({
    hours: curr.getHours(),
    minutes: curr.getMinutes(),
    seconds: curr.getSeconds(),
  });

  requestAnimationFrame(() => computeRealtimeClock(setState));
};

export const normalizeHour = (hour: number): number =>
  hour > 12 ? hour - 12 : hour;

export const indexizeHour = (hour: number): number => hour % 12;

export const calcMajorDeg = (hour: number): number => hour * 30;

export const calcMinorDeg = (minute: number): number => minute * 6;

export const calcTouchPointAngle = (
  centerPoint: DOMRect,
  touchX: number,
  touchY: number
): number => {
  const { x, y, right, bottom } = centerPoint;

  const cX = x + (right - x) / 2;
  const cY = y + (bottom - y) / 2;

  const angle = calcAngle(
    { x: cX, y: cY },
    { x: cX, y: cY - 20 },
    { x: touchX, y: touchY }
  );

  return angle;
};

export type CalcTouch = (
  centerPoint: DOMRect,
  touchX: number,
  touchY: number
) => number;

export const calcTouchHours: CalcTouch = (centerPoint, touchX, touchY) => {
  const angle = calcTouchPointAngle(centerPoint, touchX, touchY);
  const relativeHours = roundByStep(angle, 30) / 30;
  return relativeHours === 0 ? 12 : relativeHours;
};

export const calcTouchMinutes: CalcTouch = (centerPoint, touchX, touchY) => {
  const angle = calcTouchPointAngle(centerPoint, touchX, touchY);
  const relativeMinutes = roundByStep(angle, 6) / 6;
  return relativeMinutes === 60 ? 0 : relativeMinutes;
};

export const switchMode = (
  mode: ClockMode,
  renderView: () => ReactNode,
  renderViewRealtime: () => ReactNode,
  renderEditHour: () => ReactNode,
  renderEditMinute: () => ReactNode
): ReactNode => {
  switch (mode) {
    case 'view':
      return renderView();
    case 'view-realtime':
      return renderViewRealtime();
    case 'edit-hour':
      return renderEditHour();
    case 'edit-minute':
      return renderEditMinute();
    default:
      return renderView();
  }
};
