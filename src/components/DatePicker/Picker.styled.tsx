import styled from 'styled-components';
import { IconButtonStyles } from 'components/IconButton';
import { makeCssVar, rem } from 'utils/StyleHelper';

export type DateTimePickerCssVar = {
  '--cf-date-time-picker-calendar-icon-dimension': string;
  '--cf-date-time-picker-calendar-icon-margin-right': string;
};

const [defaultCssVar, cssVar] = makeCssVar<DateTimePickerCssVar>({
  '--cf-date-time-picker-calendar-icon-dimension': rem(40),
  '--cf-date-time-picker-calendar-icon-margin-right': rem(4),
});

export const Picker = styled.div`
  ${defaultCssVar};
  position: relative;
  display: inline-block;
`;

export const InputGroup = styled.div`
  display: inline-block;
  position: relative;
`;

const halfDimension = `calc(${cssVar('--cf-date-time-picker-calendar-icon-dimension')} / 2)`;

export const CalendarButton = styled.button`
  ${IconButtonStyles.SubtleIconButtonCss};
  position: absolute;
  right: ${cssVar('--cf-date-time-picker-calendar-icon-margin-right')};
  top: calc(${rem(48 / 2)} - ${halfDimension});
  height: ${cssVar('--cf-date-time-picker-calendar-icon-dimension')};
  width: ${cssVar('--cf-date-time-picker-calendar-icon-dimension')};
`;
