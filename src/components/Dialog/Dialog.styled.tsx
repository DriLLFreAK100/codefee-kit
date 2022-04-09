import styled from 'styled-components';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';

type DialogCssVar = {
  '--cf-dialog-overlay-color': string;
  '--cf-dialog-content-bg-color': string;
  '--cf-dialog-content-padding': string;
};

const [defaultCssVar, cssVar] = makeCssVar<DialogCssVar>({
  '--cf-dialog-overlay-color': cvar('--color-gray-7'),
  '--cf-dialog-content-bg-color': cvar('--control-bg-color'),
  '--cf-dialog-content-padding': rem(20),
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

export const Content = styled.div`
  background-color: ${cssVar('--cf-dialog-content-bg-color')};
  box-sizing: border-box;
  padding: ${cssVar('--cf-dialog-content-padding')};
  border-radius: ${cvar('--control-border-radius')};
  box-shadow: ${cvar('--control-shadow')};
`;
