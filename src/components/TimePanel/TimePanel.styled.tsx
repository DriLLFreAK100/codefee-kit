import styled from 'styled-components';
import { cvar, rem, makeCssVar } from 'utils/StyleHelper';

export type TimePanelCssVar = {
  '--cf-time-panel-background-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<TimePanelCssVar>({
  '--cf-time-panel-background-color': cvar('--control-bg-color'),
});

export const TimePanel = styled.div`
  ${defaultCssVar};
  background-color: ${cssVar('--cf-time-panel-background-color')};
  box-sizing: border-box;
  box-shadow: ${cvar('--control-shadow')};
  border-radius: ${cvar('--control-border-radius')};
  width: ${rem(300)};
  padding: ${rem(16)};
`;
