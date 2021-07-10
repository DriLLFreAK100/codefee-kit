import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const Subtitle1 = styled.h6`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(16)};
  line-height: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.15)};
`;

export default Subtitle1;
