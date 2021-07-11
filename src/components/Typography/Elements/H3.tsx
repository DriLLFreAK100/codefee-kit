import styled from 'styled-components';
import { BaseHeadingStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';
import { rem } from 'utils/StyleHelper';

const H3 = styled.h3<TypographyElementProps>`
  font-size: ${rem(32)};
  line-height: ${rem(44)};
  ${(props) => BaseHeadingStyle(props, 16)}
`;

export default H3;
