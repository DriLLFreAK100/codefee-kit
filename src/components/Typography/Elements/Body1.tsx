import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { BaseStyle } from './BaseStyles';

export const Body1Style = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(20)};
  ${BaseStyle(props)};
`;

const Body1 = styled.p<TypographyElementProps>`
  ${(props) => Body1Style(props)}
`;

export default Body1;
