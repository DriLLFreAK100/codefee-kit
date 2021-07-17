/* eslint-disable @typescript-eslint/indent */
import React, {
  FC, forwardRef, memo, useMemo,
} from 'react';
import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

export type CircularProgressType = 'determinate' | 'indeterminate';

export interface CircularProgressProps {
  color?: 'primary' | 'secondary';
  progress?: number;
  size?: number;
  strokeWidth?: number;
  type?: CircularProgressType;
}

export interface CircleProps extends CircularProgressProps {
  circumference: number;
}

const StyledCircularProgress = styled.svg<CircularProgressProps>`
  @keyframes circular-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  height: ${({ size }) => rem(size as number)};
  width: ${({ size }) => rem(size as number)};
  animation: ${({ type }) => (type === 'indeterminate' ? 'circular-rotate 1.4s ease-in-out infinite' : 'unset')};
`;

const StyledCircle = styled.circle<CircleProps>`
  stroke: ${({ color }) => {
    if (color === 'primary') return cvar('--color-primary');
    if (color === 'secondary') return cvar('--color-secondary');
    return cvar('--color-primary');
  }};
`;

const DeterminateCircle = styled(StyledCircle)`
  transition: stroke-dashoffset 300ms;
  stroke-dasharray: ${({ circumference }) => circumference};
  stroke-dashoffset: ${({ circumference, progress }) => `${circumference - (((progress as number) / 100) * circumference)}`};
`;

const IndeterminateCircle = styled(StyledCircle)`
  @keyframes circular-dash {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
    }

    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }

    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
    }
  }

  animation: circular-dash 1.4s ease-in-out infinite;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
`;

const getCircleComponent = (type: CircularProgressType) => {
  switch (type) {
    case 'determinate':
      return DeterminateCircle;
    case 'indeterminate':
      return IndeterminateCircle;
    default:
      return DeterminateCircle;
  }
};

const getRadius = (size: number, strokeWidth: number) => (size / 2) - strokeWidth;

const getCircumference = (radius: number) => 2 * Math.PI * radius;

const CircularProgress: FC<CircularProgressProps> = forwardRef<
  SVGSVGElement,
  CircularProgressProps
>((props: CircularProgressProps, ref) => {
  const { size, strokeWidth, type } = props;
  const radius = useMemo(() => getRadius(size as number, strokeWidth as number), [size]);
  const circumference = useMemo(() => getCircumference(radius), [radius]);

  const CircleComponent = getCircleComponent(type as CircularProgressType);

  return (
    <StyledCircularProgress
      ref={ref}
      size={size}
      type={type}
    >
      <CircleComponent
        circumference={circumference}
        cx={(size as number) / 2}
        cy={(size as number) / 2}
        r={radius}
        fill="none"
        {...props}
      />
    </StyledCircularProgress>
  );
});

CircularProgress.displayName = 'CircularProgress';
CircularProgress.defaultProps = {
  color: 'primary',
  progress: 0,
  size: 48,
  strokeWidth: 3.6,
  type: 'indeterminate',
};

export default memo(CircularProgress);
