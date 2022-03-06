import Input from 'components/Input';
import styled, { css } from 'styled-components';
import { cvar, rem, makeCssVar } from 'utils/StyleHelper';
import { Typography } from 'components/Typography';
import ClockComponent from 'components/Clock';

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

export const InputBar = styled.div`
  margin-bottom: ${rem(16)};
  display: flex;
`;

export const HourMinuteGroup = styled.div`
  display: flex;
  flex: 1;
`;

const TimeInputCss = css`
  min-width: unset;
  width: ${rem(52)};
`;

export const HourInput = styled(Input)`
  margin-right: ${rem(4)};
  ${TimeInputCss};
`;

export const MinuteInput = styled(Input)`
  margin-left: ${rem(4)};
  ${TimeInputCss};
`;

export const HourMinuteColon = styled(Typography)`
  line-height: ${cvar('--control-height')};
`;

export const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Clock = styled(ClockComponent)`
  width: ${rem(240)};
`;
