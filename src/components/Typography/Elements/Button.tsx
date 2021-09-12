import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { BaseStyle } from './BaseStyles';

export const ButtonStyle = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-weight: 500;
  font-size: ${rem(14)};
  letter-spacing: ${rem(1.25)};
  text-transform: uppercase;
  line-height: ${rem(16)};
  ${BaseStyle(props)};
`;

const Button = styled.span<TypographyElementProps>`
  ${(props) => ButtonStyle(props)}
`;

export default Button;
