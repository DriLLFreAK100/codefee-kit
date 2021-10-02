import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Gutter } from 'common';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { BaseHeadingStyle } from './BaseStyles';

export const H4Style = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(28)};
  line-height: ${rem(40)};
  ${BaseHeadingStyle(props, defaultGutterBottom)};
`;

const H4 = styled.h4<TypographyElementProps>`
  ${(props) => H4Style(props, 12)}
`;

export default H4;
