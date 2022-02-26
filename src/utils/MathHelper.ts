export type Coordinates = {
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
): Coordinates => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};
