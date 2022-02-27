import styled, { css } from 'styled-components';
import { cvar, rem, makeCssVar } from 'utils/StyleHelper';

export type TimePanelCssVar = {
  '--cf-clock-background-color': string;
  '--cf-clock-frame-color': string;
  '--cf-clock-hour-tick-color': string;
  '--cf-clock-hour-quarter-tick-color': string
  '--cf-clock-center-dot-color': string;
  '--cf-clock-arm-long-color': string;
  '--cf-clock-arm-short-color': string;
  '--cf-clock-arm-seconds-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<TimePanelCssVar>({
  '--cf-clock-background-color': cvar('--control-bg-color'),
  '--cf-clock-frame-color': cvar('--color-gray-3'),
  '--cf-clock-hour-tick-color': cvar('--color-gray-4'),
  '--cf-clock-hour-quarter-tick-color': cvar('--color-gray-5'),
  '--cf-clock-center-dot-color': cvar('--color-gray-7'),
  '--cf-clock-arm-long-color': cvar('--color-gray-7'),
  '--cf-clock-arm-short-color': cvar('--color-gray-7'),
  '--cf-clock-arm-seconds-color': cvar('--color-secondary-dark'),
});

export const Clock = styled.svg`
  ${defaultCssVar};
`;

export const ClockFrame = styled.circle`
  fill: ${cssVar('--cf-clock-background-color')};
  stroke: ${cssVar('--cf-clock-frame-color')};
  stroke-width: ${rem(8)};
`;

export const CenterDot = styled.circle`
  fill: ${cssVar('--cf-clock-center-dot-color')};
`;

const HourMarkCss = (isQuarter: boolean) => css`
  stroke: ${isQuarter ? cssVar('--cf-clock-hour-quarter-tick-color') : cssVar('--cf-clock-hour-tick-color')};
  stroke-width: ${isQuarter ? rem(8) : rem(4)};
  stroke-dasharray: ${isQuarter ? `0 ${rem(240)} ${rem(40)}` : `0 ${rem(260)} ${rem(20)}`};
`;

export const HourMark = styled.line<{ hour: number }>`
  ${({ hour }) => HourMarkCss(hour % 3 === 0)};
  transform: rotate(${({ hour }) => hour * 30}deg);
`;

export const Text = styled.text<{ isEdit?: boolean }>`
  cursor: ${({ isEdit }) => (isEdit ? 'pointer' : 'initial')} ;
  font-size: ${rem(40)};
  font-family: ${cvar('--font-family-secondary')};
`;

export const CenterGroup = styled.g`
  transform: translate(${rem(300)}, ${rem(300)});
`;

const ArmCss = css<{ isSeconds?: boolean }>`
  stroke-linecap: round;
  transition: ${({ isSeconds }) => (isSeconds ? 'none' : 'transform 1s ease-in-out')} ;
`;

export const ShortArm = styled.line`
  stroke: ${cssVar('--cf-clock-arm-short-color')};
  stroke-width: ${rem(16)};
  ${ArmCss};
`;

export const LongArm = styled.line`
  stroke: ${cssVar('--cf-clock-arm-long-color')};
  stroke-width: ${rem(12)};
  ${ArmCss};
`;

export const SecondsArm = styled.line`
  stroke: ${cssVar('--cf-clock-arm-seconds-color')};
  stroke-width: ${rem(4)};
  ${ArmCss};
`;
