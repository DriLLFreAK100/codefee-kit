import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const radius = 20.2;
const circumference = 2 * Math.PI * radius;

type CircleType = 'determinate' | 'indeterminate';

interface ICircularProgressProps {
  color?: 'primary' | 'secondary';
  progress?: number;
  type?: CircleType;
}

const StyledCircularProgress = styled.div<ICircularProgressProps>`
  display: inline-block;
  height: ${rem(48)};
  width: ${rem(48)};
`;

const Svg = styled.svg<ICircularProgressProps>`
  @keyframes circular-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  height: ${rem(48)};
  width: ${rem(48)};
  animation: ${({ type }) => { return type === 'indeterminate' ? 'circular-rotate 1.4s ease-in-out infinite' : 'unset'; }};
`;

const Circle = styled.circle<ICircularProgressProps>`
  stroke: ${({ color }) => {
    if (color === 'primary') return cvar('--color-primary');
    if (color === 'secondary') return cvar('--color-secondary');
    return cvar('--color-primary');
  }};
`;

const DeterminateCircle = styled(Circle)`
  transition: stroke-dashoffset 300ms;
`;

const IndeterminateCircle = styled(Circle)`
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

const getCircleComponent = (type: CircleType): StyledComponent<'circle', any, ICircularProgressProps, never> => {
  switch (type) {
    case 'determinate':
      return DeterminateCircle;
    case 'indeterminate':
      return IndeterminateCircle;
    default:
      return DeterminateCircle;
  }
};

const CircularProgress: FC<ICircularProgressProps> = ({
  color,
  progress,
  type,
}: ICircularProgressProps) => {
  const determinateStyle = {
    strokeDasharray: circumference,
    strokeDashoffset: `${circumference - (((progress as number) / 100) * circumference)}`,
  };

  const CircleComponent = getCircleComponent(type as CircleType);

  return (
    <StyledCircularProgress
      color={color}
      type={type}
    >
      <Svg type={type} viewBox="22 22 44 44">
        <CircleComponent
          color={color}
          style={determinateStyle}
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          strokeWidth="3.6"
        />
      </Svg>
    </StyledCircularProgress>
  );
};

CircularProgress.displayName = 'CircularProgress';
CircularProgress.defaultProps = {
  color: 'primary',
  progress: 0,
  type: 'indeterminate',
};

export default CircularProgress;
export type {
  ICircularProgressProps,
};
