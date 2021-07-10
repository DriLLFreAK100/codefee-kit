import styled from 'styled-components';
import { cvar, gut, rem } from 'utils/StyleHelper';
import { ITypographyElement } from '../interface';

const Button = styled.span<ITypographyElement>`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-weight: 500;
  font-size: ${rem(14)};
  letter-spacing: ${rem(1.25)};
  text-transform: uppercase;
  line-height: ${rem(16)};
  margin-bottom: ${({ gutter }) => gut(gutter)};
`;

export default Button;
