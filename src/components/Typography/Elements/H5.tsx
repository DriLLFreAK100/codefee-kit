import styled from 'styled-components';
import { rem } from 'utils/StyleHelper';
import { BaseHeadingStyle } from './BaseStyles';
import { TypographyElementProps } from '../interface';

const H5 = styled.h5<TypographyElementProps>`
  font-size: ${rem(24)};
  line-height: ${rem(36)};
  ${(props) => BaseHeadingStyle(props)}
`;

export default H5;
