import styled from 'styled-components';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { withHeadingStyle } from './BaseStyles';

const H6 = styled.h6<TypographyElementProps>`
  font-size: ${rem(20)};
  line-height: ${rem(32)};
`;

export default withHeadingStyle(H6);
