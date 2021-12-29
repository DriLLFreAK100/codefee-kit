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
  width: calc(100% - ${rem(knobDimension)});
  background-color: ${cvar('--color-primary-light')};
  opacity: 0.5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: ${rem(4)};
`;

export const Track = styled.div`
  height: ${rem(4)};
  background-color: ${cvar('--color-primary')};
  border: 1px solid ${cvar('--color-primary')};
  top: 50%;
  left: ${rem(knobDimension / 2)};
  transform: translateY(-50%);
  position: absolute;
  border-radius: ${rem(4)};
  max-width: calc(100% - ${rem(knobDimension)});
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
