import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const Caption = styled.figcaption<ITypographyElement>`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(12)};
  font-weight: normal;
  letter-spacing: ${rem(0.4)};
  line-height: ${rem(16)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default Caption;
