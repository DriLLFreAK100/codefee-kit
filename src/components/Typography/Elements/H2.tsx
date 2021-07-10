import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H2 = styled.h2`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(60)};
  line-height: ${rem(72)};
  font-weight: lighter;
  letter-spacing: ${rem(-0.5)};
  margin-bottom: ${rem(20)};
`;

export default H2;
