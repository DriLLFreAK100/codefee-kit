import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { BaseStyle } from './BaseStyles';

export const Subtitle2Style = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(14)};
  font-weight: 500;
  letter-spacing: ${rem(0.1)};
  line-height: ${rem(16)};
  ${BaseStyle(props)};
`;

const Subtitle2 = styled.h6<TypographyElementProps>`
  ${(props) => Subtitle2Style(props)}
`;

export default Subtitle2;
