import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H1 = styled.h1`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(80)};
  line-height: ${rem(92)};
  font-weight: lighter;
  letter-spacing: ${rem(-1)};
  margin-bottom: ${rem(24)};
`;

export default H1;
