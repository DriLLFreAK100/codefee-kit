import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const H1 = styled.h1<ITypographyElement>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(80)};
  line-height: ${rem(92)};
  font-weight: lighter;
  letter-spacing: ${rem(-1)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default H1;
