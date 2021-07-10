import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const Body1 = styled.p`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(20)};
`;

export default Body1;
