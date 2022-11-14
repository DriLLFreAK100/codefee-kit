/* eslint-disable @typescript-eslint/indent */
import React, { forwardRef, useMemo } from 'react';
import { CSSProperties, Keyframes, keyframes } from 'styled-components';
import * as S from './CircularProgress.styled';
import { CircularProgressProps, CircularProgressType } from './Common';

const getCircleComponent = (type: CircularProgressType) => {
  switch (type) {
    case 'determinate':
      return S.DeterminateCircle;
    case 'indeterminate':
      return S.IndeterminateCircle;
    default:
      return S.DeterminateCircle;
  }
};

const getCircleProps = (
  type: CircularProgressType,
  circumference: number,
  progress: number
) => {
  let style: CSSProperties = {};
  let indeterminateAnimation: Keyframes | undefined;

  if (type === 'determinate') {
    style = {
      strokeDasharray: circumference,
      strokeDashoffset: circumference - (progress / 100) * circumference,
    };
  }

  if (type === 'indeterminate') {
    indeterminateAnimation = keyframes`
      0% {
        stroke-dasharray: ${`1px, ${circumference * 1.6}px`};
        stroke-dashoffset: 0px;
      }

      50% {
        stroke-dasharray: ${`${circumference * 0.8}px, ${
          circumference * 1.6
        }px`};
        stroke-dashoffset: ${`${-circumference * 0.12}px`};
      }

      100% {
        stroke-dasharray: ${`${circumference * 0.8}px, ${
          circumference * 1.6
        }px`};
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

const getRadius = (size: number, strokeWidth: number) =>
  (size - strokeWidth) / 2;

const getCircumference = (radius: number) => 2 * Math.PI * radius;

const CircularProgress = forwardRef<SVGSVGElement, CircularProgressProps>(
  (props: CircularProgressProps, ref) => {
    const { progress, size, type } = props;

    const { strokeWidth, radius, circumference } = useMemo(() => {
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
    const { style, indeterminateAnimation } = getCircleProps(
      type as CircularProgressType,
      circumference,
      progress as number
    );

    return (
      <S.CircularProgress ref={ref} size={size} type={type}>
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
      </S.CircularProgress>
    );
  }
);

CircularProgress.displayName = 'CircularProgress';
CircularProgress.defaultProps = {
  color: 'primary',
  progress: 0,
  size: 48,
  type: 'indeterminate',
};

export default CircularProgress;
