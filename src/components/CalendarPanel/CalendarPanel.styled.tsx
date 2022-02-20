import styled, { css } from 'styled-components';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { DayTileIconButton, NavIconButton } from './Shared';
import { Typography, TypographyStyles } from '../Typography';

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
  width: ${rem(368)};
  background-color: ${cssVar('--cf-calendar-panel-background-color')};
`;

export const NavigationPanel = styled.div`
  box-sizing: border-box;
  display: flex;
  height: ${rem(52)};
  border-bottom: ${rem(1)} solid ${cvar('--color-gray-3')};
  padding: ${rem(2)};
`;

export const Title = styled(Typography)`
  flex: 1;
  text-align: center;
  line-height: ${rem(48)};
`;

export const NavButton = styled(NavIconButton)`
  font-size: ${rem(20)};
`;

export const DaySelector = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: ${rem(16)};
  min-width: ${rem(368)};
  height: ${rem(320)};
`;

export const DayIndicator = styled.div`
  box-sizing: border-box;
  display: flex;
  height: ${rem(28)};
  padding: ${rem(16)};
`;

export const DayIndicatorTile = styled.span`
  ${TypographyStyles.Subtitle2Css()};
  font-size: ${rem(12)};
  flex-basis: calc(1 / 7 * 100%);
  text-align: center;
  line-height: ${rem(28)};
  color: ${cvar('--color-gray-5')};
  text-transform: uppercase;
`;

const ArchiveDayCss = css`
  color: ${cvar('--color-gray-4')};
`;

export const DayTile = styled(DayTileIconButton)`
  flex-basis: calc(1 / 7 * 100%);
  ${({ dayPeriod }) => ['prev', 'next'].includes(dayPeriod) && ArchiveDayCss};
`;
