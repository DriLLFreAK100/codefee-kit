import styled from 'styled-components';
import { rem } from 'utils';

export const LineSeparator = styled.hr`
  background-image: linear-gradient(#222, #222);
  background-size: 100% ${rem(24)};
  border: 0;
  color: #222;
  height: ${rem(4)};
  margin: ${rem(52)} auto;
  width: ${rem(100)};
`;

export const DotSeparator = styled.hr`
  border: 0;
  border-top: ${rem(6)} dotted;
  color: #222;
  margin: ${rem(47)} auto;
  width: ${rem(48)};
`;
