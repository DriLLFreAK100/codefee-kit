import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { TypographyElementProps } from '../interface';
import { BaseStyle } from './BaseStyles';

export const Body2Style = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(14)};
  font-weight: normal;
  letter-spacing: ${rem(0.25)};
  line-height: ${rem(16)};
  ${BaseStyle(props)};
`;

const Body2 = styled.p<TypographyElementProps>`
  ${(props) => Body2Style(props)}
`;

export default Body2;
