import styled from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { withBaseStyle } from './BaseStyles';

const Subtitle2 = styled.h6<TypographyElementProps>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(14)};
  font-weight: 500;
  letter-spacing: ${rem(0.1)};
  line-height: ${rem(16)};
`;

export default withBaseStyle(Subtitle2);
