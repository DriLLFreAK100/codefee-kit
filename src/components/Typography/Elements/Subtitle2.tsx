import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const Subtitle2 = styled.h6`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(14)};
  line-height: ${rem(16)};
  font-weight: 500;
  letter-spacing: ${rem(0.1)};
`;

export default Subtitle2;
