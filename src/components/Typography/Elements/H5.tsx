import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Gutter } from 'common';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { BaseHeadingStyle } from './BaseStyles';

export const H5Style = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(24)};
  line-height: ${rem(36)};
  ${BaseHeadingStyle(props, defaultGutterBottom)};
`;

const H5 = styled.h5<TypographyElementProps>`
  ${(props) => H5Style(props)}
`;

export default H5;
