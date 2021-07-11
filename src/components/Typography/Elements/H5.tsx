import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const H5 = styled.h5`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(24)};
  line-height: ${rem(36)};
  font-weight: 600;
`;

export default H5;
