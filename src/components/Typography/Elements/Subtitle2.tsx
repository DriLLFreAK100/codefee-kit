import styled from 'styled-components';
import { cvar, rem } from 'utils';
import { BaseStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';

const Subtitle2 = styled.h6<TypographyElementProps>`
  ${(props) => BaseStyle(props)};
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(14)};
  line-height: ${rem(16)};
  font-weight: 500;
  letter-spacing: ${rem(0.1)};
`;

export default Subtitle2;
