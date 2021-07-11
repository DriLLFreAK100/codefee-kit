import styled from 'styled-components';
import { BaseHeadingStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';
import { rem } from 'utils/StyleHelper';

const H1 = styled.h1<TypographyElementProps>`
  font-size: ${rem(52)};
  line-height: ${rem(68)};
  ${(props) => BaseHeadingStyle(props, 28)}
`;

export default H1;
