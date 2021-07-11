import styled from 'styled-components';
import { BaseHeadingStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';
import { rem } from 'utils/StyleHelper';

const H6 = styled.h6<TypographyElementProps>`
  font-size: ${rem(20)};
  line-height: ${rem(32)};
  ${(props) => BaseHeadingStyle(props)}
`;

export default H6;
