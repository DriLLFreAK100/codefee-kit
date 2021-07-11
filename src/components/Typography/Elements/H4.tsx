import styled from 'styled-components';
import { BaseHeadingStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';
import { rem } from 'utils/StyleHelper';

const H4 = styled.h4<TypographyElementProps>`
  font-size: ${rem(28)};
  line-height: ${rem(40)};
  ${(props) => BaseHeadingStyle(props, 12)}
`;

export default H4;
