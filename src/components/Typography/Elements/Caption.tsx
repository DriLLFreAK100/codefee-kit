import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const Caption = styled.figcaption`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(12)};
  font-weight: normal;
  letter-spacing: ${rem(0.4)};
  line-height: ${rem(16)};
`;

export default Caption;
