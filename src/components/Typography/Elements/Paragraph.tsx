import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const Paragraph = styled.p`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  margin-bottom: ${rem(20)};
`;

export default Paragraph;
