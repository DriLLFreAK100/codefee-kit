import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';
import { knobDimension } from './Common';

export const Slider = styled.div`
  cursor: pointer;
  touch-action: none;
  min-width: ${rem(100)};
  height: ${rem(knobDimension)};
  position: relative;
`;

export const Rail = styled.div`
  height: ${rem(4)};
  width: 100%;
  background-color: ${cvar('--color-primary-light')};
  opacity: 0.5;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  border-radius: ${rem(4)};
`;

export const Track = styled.div`
  height: ${rem(6)};
  background-color: ${cvar('--color-primary')};
  border: 1px solid ${cvar('--color-primary')};
  box-sizing: border-box;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  border-radius: ${rem(4)} 0 0 ${rem(4)};
`;

export const Knob = styled.div`
  height: ${rem(knobDimension)};
  width: ${rem(knobDimension)};
  background-color: ${cvar('--color-primary')};
  border-radius: 50%;
  transition: background-color ${cvar('--transition-hover')};
  position: absolute;

  &:hover{
    background-color: ${cvar('--color-primary-light')};
  }

  &:active{
    background-color: ${cvar('--color-primary-dark')};
  }
`;
