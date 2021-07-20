import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';
import { TypographyElementProps } from '../interface';
import { withBaseStyle } from './BaseStyles';

const Paragraph = styled.p<TypographyElementProps>`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(20)};
`;

export default withBaseStyle(Paragraph);
