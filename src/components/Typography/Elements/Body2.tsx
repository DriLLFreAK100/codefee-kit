import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const Body2 = styled.p<ITypographyElement>`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(14)};
  font-weight: normal;
  letter-spacing: ${rem(0.25)};
  line-height: ${rem(16)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default Body2;
