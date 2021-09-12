import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Gutter } from 'common';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { BaseHeadingStyle } from './BaseStyles';

export const H3Style = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(32)};
  line-height: ${rem(44)};
  ${BaseHeadingStyle(props, defaultGutterBottom)};
`;

const H3 = styled.h3<TypographyElementProps>`
  ${(props) => H3Style(props, 16)}
`;

export default H3;
