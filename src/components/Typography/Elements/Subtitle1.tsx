import styled from 'styled-components';
import { cvar, rem } from 'utils';
import { BaseStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';

const Subtitle1 = styled.h6<TypographyElementProps>`
  ${(props) => BaseStyle(props)};
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(16)};
  line-height: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.15)};
`;

export default Subtitle1;
