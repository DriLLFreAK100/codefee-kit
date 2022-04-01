import Input from 'components/Input';
import styled from 'styled-components';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import PickerComponent from './Picker';

export type DateTimePickerCssVar = {
  '--cf-date-time-picker-background-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<DateTimePickerCssVar>({
  '--cf-date-time-picker-background-color': cvar('--control-bg-color'),
});

export const DateTimeInput = styled(Input)`
  min-width: ${rem(280)};
`;

export const Picker = styled(PickerComponent)`
  ${defaultCssVar};
`;

export { cssVar };
