import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H2 = styled.h2`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(40)};
  line-height: ${rem(52)};
  font-weight: 600;
  margin-bottom: ${rem(24)};
`;

export default H2;
