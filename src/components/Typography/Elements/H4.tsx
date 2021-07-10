import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const H4 = styled.h4<ITypographyElement>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(36)};
  line-height: ${rem(48)};
  font-weight: normal;
  letter-spacing: ${rem(0.25)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default H4;
