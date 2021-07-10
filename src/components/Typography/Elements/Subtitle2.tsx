import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const Subtitle2 = styled.h6<ITypographyElement>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(14)};
  line-height: ${rem(16)};
  font-weight: 500;
  letter-spacing: ${rem(0.1)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default Subtitle2;
