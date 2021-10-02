import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Gutter } from 'common';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { BaseHeadingStyle } from './BaseStyles';

export const H6Style = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(20)};
  line-height: ${rem(32)};
  ${BaseHeadingStyle(props, defaultGutterBottom)};
`;

const H6 = styled.h6<TypographyElementProps>`
  ${(props) => H6Style(props)}
`;

export default H6;
