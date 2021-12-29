import { cvar, rem } from 'utils/StyleHelper';
import styled, { css } from 'styled-components';

const controlDimension = rem(24);

export const Slider = styled.div`
  min-width: ${rem(100)};
  height: ${controlDimension};
  position: relative;
`;

const Shared = css`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
`;

export const Rail = styled.div`
  height: ${rem(4)};
  width: 100%;
  background-color: ${cvar('--color-primary-light')};
  opacity: 0.5;
  ${Shared}
`;

export const Track = styled.div`
  height: ${rem(4)};
  width: 50%;
  background-color: ${cvar('--color-primary')};
  border: 1px solid ${cvar('--color-primary')};
  ${Shared}
`;

export const Knob = styled.div`
  cursor: pointer;
  height: ${controlDimension};
  width: ${controlDimension};
  background-color: ${cvar('--color-primary')};
  border-radius: 50%;
  transition: background-color ${cvar('--transition-hover')};
  ${Shared}

  &:hover{
    background-color: ${cvar('--color-primary-light')};
  }

  &:active{
    background-color: ${cvar('--color-primary-dark')};
  }
`;
