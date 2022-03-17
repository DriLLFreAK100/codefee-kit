import styled, { css } from 'styled-components';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { TypographyStyles } from 'components/Typography';
import { IconButtonStyles } from 'components/IconButton';
import { DayTileIconButton, TileIconButton, NavIconButton } from './Common';

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

export const TitleButton = styled.button`
  ${IconButtonStyles.SubtleIconButtonCss};  
  flex: 1;
  text-align: center;
  line-height: ${rem(48)};
  border-radius: ${cvar('--control-border-radius')};
`;

export const NavButton = styled(NavIconButton)`
  font-size: ${rem(20)};
`;

const SelectorCss = css`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  min-width: ${rem(368)};
`;

export const DaySelector = styled.div`
  ${SelectorCss};
  padding: 0 ${rem(16)};
  height: ${rem(288)};
`;

export const MonthSelector = styled.div`
  ${SelectorCss};
  padding: ${rem(16)} ${rem(16)} 0;
  height: ${rem(336)};
`;

export const DayIndicator = styled.div`
  box-sizing: border-box;
  display: flex;
  height: ${rem(48)};
  padding: ${rem(22)} ${rem(16)} ${rem(10)};
`;

export const DayIndicatorTile = styled.span`
  ${TypographyStyles.Subtitle2Css()};
  font-size: ${rem(12)};
  flex-basis: calc(1 / 7 * 100%);
  text-align: center;
  line-height: ${rem(16)};
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

export const MonthTile = styled(TileIconButton)`
  width: ${rem(84)};
  height: ${rem(84)};
  flex-basis: 25%;
`;

export const YearTile = styled(TileIconButton)`
  width: ${rem(84)};
  height: ${rem(72)};
  flex-basis: 25%;
`;
