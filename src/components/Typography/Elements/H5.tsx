import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const H5 = styled.h5<ITypographyElement>`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(24)};
  line-height: ${rem(36)};
  font-weight: normal;
  letter-spacing: ${rem(0)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default H5;
