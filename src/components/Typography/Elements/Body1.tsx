import styled from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { withBaseStyle } from './BaseStyles';

const Body1 = styled.p<TypographyElementProps>`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(20)};
`;

export default withBaseStyle(Body1);
