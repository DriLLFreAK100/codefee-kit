import styled from 'styled-components';
import { cvar, rem } from 'utils';

export const LineSeparator = styled.hr`
  background-image: linear-gradient(
    ${cvar('--color-gray-7')},
    ${cvar('--color-gray-7')}
  );
  background-size: 100% ${rem(24)};
  border: 0;
  height: ${rem(4)};
  margin: ${rem(52)} auto;
  width: ${rem(100)};
`;

export const DotSeparator = styled.hr`
  border: 0;
  border-top: ${rem(6)} dotted;
  color: ${cvar('--color-gray-7')};
  margin: ${rem(47)} auto;
  width: ${rem(48)};
`;
