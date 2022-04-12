import styled from 'styled-components';
import { TypographyStyles } from 'components/Typography';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { DialogVariant } from './Common';

type DialogCssVar = {
  '--cf-dialog-overlay-color': string;
  '--cf-dialog-content-bg-color': string;
  '--cf-dialog-content-padding': string;
  '--cf-dialog-min-width': string;
};

const [defaultCssVar, cssVar] = makeCssVar<DialogCssVar>({
  '--cf-dialog-overlay-color': cvar('--color-gray-7'),
  '--cf-dialog-content-bg-color': cvar('--control-bg-color'),
  '--cf-dialog-content-padding': rem(16),
  '--cf-dialog-min-width': rem(360),
});

export const Dialog = styled.div<{ isActive: boolean }>`
  ${defaultCssVar};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${cvar('--transition-toggle')};
`;

export const Overlay = styled.div`
  background-color: ${cssVar('--cf-dialog-overlay-color')};
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
`;

export const ContentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getVariantBorder = (variant: DialogVariant) => {
  switch (variant) {
    case 'error':
      return `border-top: ${rem(4)} solid ${cvar('--color-error')}`;
    case 'info':
      return `border-top: ${rem(4)} solid ${cvar('--color-info')}`;
    case 'success':
      return `border-top: ${rem(4)} solid ${cvar('--color-success')}`;
    case 'warning':
      return `border-top: ${rem(4)} solid ${cvar('--color-warning')}`;
    case 'default':
    default:
      return '';
  }
};

export const Content = styled.div<{ variant: DialogVariant }>`
  ${TypographyStyles.Body1Css()};
  background-color: ${cssVar('--cf-dialog-content-bg-color')};
  box-sizing: border-box;
  padding: ${cssVar('--cf-dialog-content-padding')};
  border-radius: ${cvar('--control-border-radius')};
  box-shadow: ${cvar('--control-shadow')};
  min-width: ${cssVar('--cf-dialog-min-width')};
  ${({ variant }) => getVariantBorder(variant)};
`;
