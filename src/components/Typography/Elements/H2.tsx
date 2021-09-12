import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Gutter } from 'common';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { BaseHeadingStyle } from './BaseStyles';

export const H2Style = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(40)};
  line-height: ${rem(52)};
  ${BaseHeadingStyle(props, defaultGutterBottom)};
`;

const H2 = styled.h2<TypographyElementProps>`
  ${(props) => H2Style(props, 24)}
`;

export default H2;
