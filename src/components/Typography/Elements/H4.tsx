import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H4 = styled.h4`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(28)};
  line-height: ${rem(40)};
  font-weight: 600;
  margin-bottom: ${rem(12)};
`;

export default H4;
