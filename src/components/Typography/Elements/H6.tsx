import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H6 = styled.h6`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(20)};
  line-height: ${rem(32)};
  font-weight: 500;
  letter-spacing: ${rem(0.15)};
`;

export default H6;
