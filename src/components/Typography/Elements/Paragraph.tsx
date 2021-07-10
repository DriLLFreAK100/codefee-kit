import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const Paragraph = styled.p<ITypographyElement>`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  margin-bottom: ${rem(20)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default Paragraph;
