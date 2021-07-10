import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const H2 = styled.h2<ITypographyElement>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(60)};
  line-height: ${rem(72)};
  font-weight: lighter;
  letter-spacing: ${rem(-0.5)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default H2;
