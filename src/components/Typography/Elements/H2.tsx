import styled from 'styled-components';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { withHeadingStyle } from './BaseStyles';

const H2 = styled.h2<TypographyElementProps>`
  font-size: ${rem(40)};
  line-height: ${rem(52)};
`;

export default withHeadingStyle(H2, 24);
