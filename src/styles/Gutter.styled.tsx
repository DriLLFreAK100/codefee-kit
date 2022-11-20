import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Gutter, PositionProps } from 'common';
import { rem } from 'utils';

const GutterStyle = ({
  top,
  right,
  bottom,
  left,
}: PositionProps<Gutter>): FlattenSimpleInterpolation => css`
  // prettier-ignore
  margin: ${rem(top ?? 0)} ${rem(right ?? 0)} ${rem(bottom ?? 0)} ${rem(
    left ?? 0
  )};
`;

export default GutterStyle;
