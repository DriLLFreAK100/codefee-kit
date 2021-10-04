import styled, { css } from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';
import { CircleProps, CircularProgressProps } from './Common';

export const CircularProgress = styled.svg<CircularProgressProps>`
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

export const DeterminateCircle = styled(StyledCircle)`
  transition: stroke-dashoffset 300ms;
`;

export const IndeterminateCircle = styled(StyledCircle)`
  animation: ${({ indeterminateAnimation }) => css`${indeterminateAnimation} 1.4s ease-in-out infinite`};
  stroke-dasharray: ${({ circumference }) => `${circumference * 0.8}px, ${circumference * 1.6}px`};
  stroke-dashoffset: 0px;
`;
