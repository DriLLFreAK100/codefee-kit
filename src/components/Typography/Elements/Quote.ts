import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { BaseStyle } from './BaseStyles';

export const BlockquoteStyle = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(24)};
  font-style: italic;
  font-weight: 300;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(36)};
  ${BaseStyle(props)};
`;

const Blockquote = styled.p<TypographyElementProps>`
  ${(props) => BlockquoteStyle(props)}
`;

export default Blockquote;
