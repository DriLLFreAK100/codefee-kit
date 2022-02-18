import styled from 'styled-components';
import { cvar, rem, makeCssVar } from 'utils/StyleHelper';

export type CalendarPanelCssVar = {
  '--cf-calendar-panel-background-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<CalendarPanelCssVar>({
  '--cf-calendar-panel-background-color': cvar('--control-bg-color'),
});

export const CalendarPanel = styled.div`
  ${defaultCssVar};
  box-sizing: border-box;
  box-shadow: ${cvar('--control-shadow')};
  border-radius: ${cvar('--control-border-radius')};
  width: ${rem(340)};
  background-color: ${cssVar('--cf-calendar-panel-background-color')};
`;

export const NavigationPanel = styled.div`
  box-sizing: border-box;
  height: ${rem(48)};
  border-bottom: ${rem(1)} solid ${cvar('--color-gray-3')};
`;

export const DaySelector = styled.div`
  box-sizing: border-box;
  height: ${rem(288)};
`;
