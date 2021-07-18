/* eslint-disable @typescript-eslint/indent */
import React, {
  FC, forwardRef, memo, useMemo,
} from 'react';
import styled, {
  css, CSSProperties, Keyframes, keyframes,
} from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

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
`;

const IndeterminateCircle = styled(StyledCircle)`
  animation: ${({ indeterminateAnimation }) => css`${indeterminateAnimation} 1.4s ease-in-out infinite`};
  stroke-dasharray: ${({ circumference }) => `${circumference * 0.8}px, ${circumference * 1.6}px`};
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

const getCircleProps = (type: CircularProgressType, circumference: number, progress: number) => {
  let style: CSSProperties = {};
  let indeterminateAnimation: Keyframes | undefined;

  if (type === 'determinate') {
    style = {
      strokeDasharray: circumference,
      strokeDashoffset: circumference - (((progress) / 100) * circumference),
    };
  }

  if (type === 'indeterminate') {
    indeterminateAnimation = keyframes`
      0% {
        stroke-dasharray: ${`1px, ${circumference * 1.6}px`};
        stroke-dashoffset: 0px;
      }

      50% {
        stroke-dasharray: ${`${circumference * 0.8}px, ${circumference * 1.6}px`};
        stroke-dashoffset: ${`${-circumference * 0.12}px`};
      }

      100% {
        stroke-dasharray: ${`${circumference * 0.8}px, ${circumference * 1.6}px`};
        stroke-dashoffset: ${`${-circumference}px`};
      }
    `;
  }

  return {
    style,
    indeterminateAnimation,
  };
};

const getStrokeWidth = (size: number) => size * (3 / 40);

const getRadius = (size: number, strokeWidth: number) => (size - strokeWidth) / 2;

const getCircumference = (radius: number) => 2 * Math.PI * radius;

const CircularProgress: FC<CircularProgressProps> = forwardRef<
  SVGSVGElement,
  CircularProgressProps
>((props: CircularProgressProps, ref) => {
  const {
    progress,
    size,
    type,
  } = props;

  const {
    strokeWidth,
    radius,
    circumference,
  } = useMemo(() => {
    const pStrokeWidth = getStrokeWidth(size as number);
    const pRadius = getRadius(size as number, pStrokeWidth);
    const pCircumference = getCircumference(pRadius);

    return {
      strokeWidth: pStrokeWidth,
      radius: pRadius,
      circumference: pCircumference,
    };
  }, [size]);

  const CircleComponent = getCircleComponent(type as CircularProgressType);
  const {
    style,
    indeterminateAnimation,
  } = getCircleProps(type as CircularProgressType, circumference, progress as number);

  return (
    <StyledCircularProgress
      ref={ref}
      size={size}
      type={type}
    >
      <CircleComponent
        circumference={circumference}
        indeterminateAnimation={indeterminateAnimation}
        style={style}
        cx={(size as number) / 2}
        cy={(size as number) / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
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
  type: 'indeterminate',
};

export default memo(CircularProgress);
