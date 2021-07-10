import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H3 = styled.h3`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(48)};
  line-height: ${rem(60)};
  font-weight: normal;
  letter-spacing: ${rem(0)};
  margin-bottom: ${rem(16)};
`;

export default H3;
