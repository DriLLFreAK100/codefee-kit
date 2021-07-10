import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H4 = styled.h4`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(36)};
  line-height: ${rem(48)};
  font-weight: normal;
  letter-spacing: ${rem(0.25)};
  margin-bottom: ${rem(12)};
`;

export default H4;
