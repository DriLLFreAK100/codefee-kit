import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { BaseStyle } from './BaseStyles';

export const ParagraphStyle = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(20)};
  ${BaseStyle(props)};
`;

const Paragraph = styled.p<TypographyElementProps>`
  ${(props) => ParagraphStyle(props)}
`;

export default Paragraph;
