import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const H3 = styled.h3<ITypographyElement>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(48)};
  line-height: ${rem(60)};
  font-weight: normal;
  letter-spacing: ${rem(0)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default H3;
