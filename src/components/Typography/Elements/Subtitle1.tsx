import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { BaseStyle } from './BaseStyles';

export const Subtitle1Style = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.15)};
  line-height: ${rem(16)};
  ${BaseStyle(props)};
`;

const Subtitle1 = styled.h6<TypographyElementProps>`
  ${(props) => Subtitle1Style(props)}
`;

export default Subtitle1;
