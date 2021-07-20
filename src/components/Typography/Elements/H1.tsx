import styled from 'styled-components';
import { rem } from 'utils/StyleHelper';
import { withHeadingStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';

const H1 = styled.h1<TypographyElementProps>`
  font-size: ${rem(52)};
  line-height: ${rem(68)};
`;

export default withHeadingStyle(H1, 28);
