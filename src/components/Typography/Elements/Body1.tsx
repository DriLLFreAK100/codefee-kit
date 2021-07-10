import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const Body1 = styled.p<ITypographyElement>`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(20)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default Body1;
