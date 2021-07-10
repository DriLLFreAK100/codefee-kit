import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const Subtitle1 = styled.h6<ITypographyElement>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(16)};
  line-height: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.15)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default Subtitle1;
