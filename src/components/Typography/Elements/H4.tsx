import styled from 'styled-components';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { withHeadingStyle } from './BaseStyles';

const H4 = styled.h4<TypographyElementProps>`
  font-size: ${rem(28)};
  line-height: ${rem(40)};
`;

export default withHeadingStyle(H4, 12);
