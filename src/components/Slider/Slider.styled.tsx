import styled, { css } from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';
import { knobDimension } from './Common';

const ThumbCss = css`
  appearance: none;
  border-radius: 50%;
  width: ${rem(knobDimension)};
  height: ${rem(knobDimension)};
  background-color: ${cvar('--color-primary')};
  box-shadow: ${cvar('--control-shadow')};
`;

export const Slider = styled.input`
  appearance: none;
  cursor: pointer;
  background-color: ${cvar('--color-gray-5')};
  width: ${rem(100)};
  height: ${rem(4)};
  margin: ${rem(knobDimension / 2)} 0;
  border-radius: ${cvar('--control-border-radius')};
  transition: background-color ${cvar('--transition-hover')};

  &:hover {
    background-color: ${cvar('--color-gray-4')};
  }

  &:active {
    background-color: ${cvar('--color-gray-6')};
  }

  &::-webkit-slider-thumb {
    ${ThumbCss}
  }

  &::-moz-range-thumb {
    ${ThumbCss}
  }
`;
