import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const Body2 = styled.p`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(14)};
  font-weight: normal;
  letter-spacing: ${rem(0.25)};
  line-height: ${rem(16)};
`;

export default Body2;
