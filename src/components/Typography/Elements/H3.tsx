import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H3 = styled.h3`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(32)};
  line-height: ${rem(44)};
  font-weight: 600;
  margin-bottom: ${rem(16)};
`;

export default H3;
