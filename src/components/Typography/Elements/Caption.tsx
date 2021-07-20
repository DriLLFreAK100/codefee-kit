import styled from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { withBaseStyle } from './BaseStyles';

const Caption = styled.figcaption<TypographyElementProps>`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(12)};
  font-weight: normal;
  letter-spacing: ${rem(0.4)};
  line-height: ${rem(16)};
`;

export default withBaseStyle(Caption);
