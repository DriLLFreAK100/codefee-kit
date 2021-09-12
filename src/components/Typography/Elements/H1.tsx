import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Gutter } from 'common';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { BaseHeadingStyle } from './BaseStyles';

export const H1Style = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(52)};
  line-height: ${rem(68)};
  ${BaseHeadingStyle(props, defaultGutterBottom)};
`;

const H1 = styled.h1<TypographyElementProps>`
  ${(props) => H1Style(props, 28)}
`;

export default H1;
