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

const HourInputCss = css`
  margin-right: ${rem(4)};
  ${TimeInputCss};
`;

const MinuteInputCss = css`
  margin-left: ${rem(4)};
  ${TimeInputCss};
`;

export const HourInput = styled(Input)`
  ${HourInputCss}
`;

export const MinuteInput = styled(Input)`
  ${MinuteInputCss}
`;

const ActiveButtonCss = css`
  border: ${rem(2)} solid ${cvar('--color-primary')};
  padding: ${rem(13)} ${rem(15)};
`;

const HourMinuteButton = styled.button<{ isActive: boolean }>`
  height: ${cvar('--control-height')};
  border-radius: ${cvar('--control-border-radius')};
  box-sizing: border-box;
  border: ${rem(1)} solid ${cvar('--color-gray-5')};
  background-color: ${cvar('--control-bg-color')};
  padding: ${rem(14)} ${rem(16)};

  ${({ isActive }) => isActive && ActiveButtonCss};
`;

export const HourButton = styled(HourMinuteButton)`
  ${HourInputCss}
`;

export const MinuteButton = styled(HourMinuteButton)`
  ${MinuteInputCss}
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
