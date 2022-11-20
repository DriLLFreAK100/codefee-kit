import { css } from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

export const ErrorCss = css`
  border: ${rem(2)} solid ${cvar('--control-border-color-error')};
`;

export const DisabledCss = css`
  opacity: 0.7;
  pointer-events: none;
`;

export const NonErrorCss = css`
  &:disabled {
    opacity: 0.7;
  }

  &:hover:not(:disabled):not(:focus) {
    border-color: ${cvar('--control-border-color-hover')};
  }

  &:focus {
    border: ${cvar('--control-border-focus')};
  }
`;
