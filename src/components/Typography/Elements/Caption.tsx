import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { BaseStyle } from './BaseStyles';

export const CaptionStyle = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(14)};
  font-weight: normal;
  letter-spacing: ${rem(0.4)};
  line-height: ${rem(16)};
  ${BaseStyle(props)};
`;

const Caption = styled.figcaption<TypographyElementProps>`
  ${(props) => CaptionStyle(props)}
`;

export default Caption;
