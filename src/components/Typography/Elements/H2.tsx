import styled from 'styled-components';
import { BaseHeadingStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';
import { rem } from 'utils/StyleHelper';

const H2 = styled.h2<TypographyElementProps>`
  font-size: ${rem(40)};
  line-height: ${rem(52)};
  ${(props) => BaseHeadingStyle(props, 24)}
`;

export default H2;
