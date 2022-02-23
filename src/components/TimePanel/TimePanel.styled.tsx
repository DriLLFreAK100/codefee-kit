import styled, { css } from 'styled-components';
import { cvar, rem, makeCssVar } from 'utils/StyleHelper';

export type TimePanelCssVar = {
  '--cf-time-panel-background-color': string;
  '--cf-time-panel-clock-frame-color': string;
  '--cf-time-panel-clock-hour-color': string;
  '--cf-time-panel-clock-hour-quarter-color': string
  '--cf-time-panel-clock-center-dot-color': string;
  '--cf-time-panel-clock-arm-hour-color': string;
  '--cf-time-panel-clock-arm-minute-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<TimePanelCssVar>({
  '--cf-time-panel-background-color': cvar('--control-bg-color'),
  '--cf-time-panel-clock-frame-color': cvar('--color-gray-3'),
  '--cf-time-panel-clock-hour-color': cvar('--color-gray-4'),
  '--cf-time-panel-clock-hour-quarter-color': cvar('--color-gray-5'),
  '--cf-time-panel-clock-center-dot-color': cvar('--color-gray-7'),
  '--cf-time-panel-clock-arm-hour-color': cvar('--color-gray-7'),
  '--cf-time-panel-clock-arm-minute-color': cvar('--color-gray-7'),
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

export const Clock = styled.svg`
`;

export const ClockFrame = styled.circle`
  fill: none;
  stroke: ${cssVar('--cf-time-panel-clock-frame-color')};
  stroke-width: ${rem(8)};
`;

export const CenterDot = styled.circle`
  fill: ${cssVar('--cf-time-panel-clock-center-dot-color')};
`;

const HourMarkCss = (isQuarter: boolean) => css`
  fill: none;
  stroke: ${isQuarter ? cssVar('--cf-time-panel-clock-hour-quarter-color') : cssVar('--cf-time-panel-clock-hour-color')};
  stroke-width: ${isQuarter ? rem(8) : rem(4)};
  stroke-dasharray: ${isQuarter ? `0 ${rem(240)} ${rem(40)}` : `0 ${rem(260)} ${rem(20)}`};
`;

export const HourMark = styled.line<{ hour: number }>`
  ${({ hour }) => HourMarkCss(hour % 3 === 0)};
  transform: rotate(${({ hour }) => hour * 30}deg);
`;

export const CenterGroup = styled.g`
  transform: translate(${rem(300)}, ${rem(300)});
`;

const ArmCss = css`
  stroke-linecap: round;
  transition: transform 1.4s ease-in-out;
`;

export const HourArm = styled.line`
  stroke: ${cssVar('--cf-time-panel-clock-arm-hour-color')};
  stroke-width: ${rem(16)};
  ${ArmCss};
`;

export const MinuteArm = styled.line`
  stroke: ${cssVar('--cf-time-panel-clock-arm-minute-color')};
  stroke-width: ${rem(12)};
  ${ArmCss};
`;
