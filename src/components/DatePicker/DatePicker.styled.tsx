import styled from 'styled-components';
import Input from 'components/Input';
import CalendarPanel from 'components/CalendarPanel';
import { IconButtonStyles } from 'components/IconButton';
import { makeCssVar, rem } from 'utils/StyleHelper';

export type DatePickerCssVar = {
  '--cf-date-picker-calendar-icon-dimension': string;
  '--cf-date-picker-calendar-icon-margin-right': string;
};

const [defaultCssVar, cssVar] = makeCssVar<DatePickerCssVar>({
  '--cf-date-picker-calendar-icon-dimension': rem(40),
  '--cf-date-picker-calendar-icon-margin-right': rem(4),
});

export const DatePicker = styled.div`
  ${defaultCssVar};
  position: relative;
  display: inline-block;
`;

export const InputGroup = styled.div`
  display: inline-block;
  position: relative;
`;

export const DateInput = styled(Input)``;

const halfDimension = `calc(${cssVar('--cf-date-picker-calendar-icon-dimension')} / 2)`;

export const CalendarButton = styled.button`
  ${IconButtonStyles.SubtleIconButtonCss};
  position: absolute;
  right: ${cssVar('--cf-date-picker-calendar-icon-margin-right')};
  top: calc(${rem(48 / 2)} - ${halfDimension});
  height: ${cssVar('--cf-date-picker-calendar-icon-dimension')};
  width: ${cssVar('--cf-date-picker-calendar-icon-dimension')};
`;

export const DateSelector = styled(CalendarPanel)`
  position: absolute;
`;
