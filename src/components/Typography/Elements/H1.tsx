import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H1 = styled.h1`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(52)};
  line-height: ${rem(60)};
  font-weight: 600;
  margin-bottom: ${rem(30)};
`;

export default H1;
