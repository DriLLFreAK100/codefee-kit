import styled from 'styled-components';
import { cvar, rem } from 'utils';
import { BaseStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';

const Button = styled.span<TypographyElementProps>`
  ${(props) => BaseStyle(props)};
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-weight: 500;
  font-size: ${rem(14)};
  letter-spacing: ${rem(1.25)};
  text-transform: uppercase;
  line-height: ${rem(16)};
`;

export default Button;
