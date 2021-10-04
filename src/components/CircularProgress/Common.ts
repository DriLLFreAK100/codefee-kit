import { Keyframes } from 'styled-components';

export type CircularProgressType = 'determinate' | 'indeterminate';

export interface CircularProgressProps {
  color?: 'primary' | 'secondary';
  progress?: number;
  size?: number;
  type?: CircularProgressType;
}

export interface CircleProps extends CircularProgressProps {
  circumference: number;
  indeterminateAnimation?: Keyframes;
}
