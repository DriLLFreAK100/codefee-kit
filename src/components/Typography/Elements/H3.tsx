import styled from 'styled-components';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { withHeadingStyle } from './BaseStyles';

const H3 = styled.h3<TypographyElementProps>`
  font-size: ${rem(32)};
  line-height: ${rem(44)};
`;

export default withHeadingStyle(H3, 16);
