import styled from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { withBaseStyle } from './BaseStyles';

const Subtitle1 = styled.h6<TypographyElementProps>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.15)};
  line-height: ${rem(16)};
`;

export default withBaseStyle(Subtitle1);
