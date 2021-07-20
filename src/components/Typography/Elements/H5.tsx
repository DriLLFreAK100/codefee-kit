import styled from 'styled-components';
import { rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { withHeadingStyle } from './BaseStyles';

const H5 = styled.h5<TypographyElementProps>`
  font-size: ${rem(24)};
  line-height: ${rem(36)};
`;

export default withHeadingStyle(H5);
