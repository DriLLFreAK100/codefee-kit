import styled from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { withBaseStyle } from './BaseStyles';

const Blockquote = styled.p<TypographyElementProps>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(24)};
  font-style: italic;
  font-weight: 300;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(36)};
`;

export default withBaseStyle(Blockquote);
