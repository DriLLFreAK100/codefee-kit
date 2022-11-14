import styled, { css } from 'styled-components';
import { cvar } from 'utils/StyleHelper';

const IconButtonCss = css`
  height: ${cvar('--control-height')};
  width: ${cvar('--control-height')};
  border: 0;
  border-radius: 50%;
  box-shadow: ${cvar('--control-shadow')};
  transition: background-color ${cvar('--transition-hover')} ease-in-out;

  &:disabled {
    opacity: 0.6;
  }
`;

const PrimaryIconButtonCss = css`
  ${IconButtonCss};
  background-color: ${cvar('--color-primary')};
  color: ${cvar('--color-primary-on')};

  &:hover {
    background-color: ${cvar('--color-primary-light')};
  }

  &:active {
    background-color: ${cvar('--color-primary-dark')};
  }

  &:disabled {
    background-color: ${cvar('--color-primary')};
  }
`;

const SecondaryIconButtonCss = css`
  ${IconButtonCss};
  background-color: ${cvar('--color-secondary')};
  color: ${cvar('--color-secondary-on')};

  &:hover {
    background-color: ${cvar('--color-secondary-light')};
  }

  &:active {
    background-color: ${cvar('--color-secondary-dark')};
  }

  &:disabled {
    background-color: ${cvar('--color-secondary')};
  }
`;

const SubtleIconButtonCss = css`
  ${IconButtonCss};
  background-color: inherit;
  box-shadow: unset;

  &:hover {
    background-color: ${cvar('--color-gray-2')};
  }

  &:active {
    background-color: ${cvar('--color-gray-3')};
  }

  :disabled {
    background-color: inherit;
  }
`;

export const PrimaryIconButton = styled.button`
  ${PrimaryIconButtonCss}
`;

export const SecondaryIconButton = styled.button`
  ${SecondaryIconButtonCss}
`;

export const SubtleIconButton = styled.button`
  ${SubtleIconButtonCss}
`;

export default {
  IconButtonCss,
  PrimaryIconButtonCss,
  SecondaryIconButtonCss,
  SubtleIconButtonCss,
};
