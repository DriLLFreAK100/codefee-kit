import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const H6 = styled.h6<ITypographyElement>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(20)};
  line-height: ${rem(32)};
  font-weight: 500;
  letter-spacing: ${rem(0.15)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default H6;
