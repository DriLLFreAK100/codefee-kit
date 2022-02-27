export type Coordinate = {
  x: number;
  y: number;
};

/**
 * Adapted from https://nyxo.app/creating-a-clock-face-in-react-native-with-svg
 */
export const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
): Coordinate => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

export const calcAngle = (
  center: Coordinate,
  start: Coordinate,
  end: Coordinate,
): number => {
  const { x: p1X, y: p1Y } = center;
  const { x: p2X, y: p2Y } = start;
  const { x: p3X, y: p3Y } = end;

  const numerator = p2Y * (p1X - p3X) + p1Y * (p3X - p2X) + p3Y * (p2X - p1X);
  const denominator = (p2X - p1X) * (p1X - p3X) + (p2Y - p1Y) * (p1Y - p3Y);

  const angleRad = Math.atan(numerator / denominator);
  const angleDeg = (angleRad * 180) / Math.PI;

  if ((p3Y - p1Y) < 0) {
    if (angleDeg < 0) {
      return angleDeg * -1;
    }

    return 360 - angleDeg;
  }

  if (angleDeg < 0) {
    return 180 + (angleDeg * -1);
  }

  return 180 - angleDeg;
};

export const roundByStep = (value: number, step: number): number => {
  let curr = 0;
  let startDiff = Math.abs(value - curr);
  let endDiff = Math.abs(value - curr);

  while (curr < value) {
    startDiff = Math.abs(value - curr);
    curr += step;
    endDiff = Math.abs(value - curr);
  }

  if (startDiff < endDiff) {
    return curr - step;
  }

  return curr;
};
