import React, { FC } from 'react';
import styled from 'styled-components';
import { rem } from 'utils';

type SeparatorType = 'line' | 'dot';

export interface SeparatorProps {
  type?: SeparatorType;
}

const StyledLineSeparator = styled.hr`
  background-image: linear-gradient(#222, #222);
  background-size: 100% ${rem(24)};
  border: 0;
  color: #222;
  height: ${rem(4)};
  margin: ${rem(52)} auto;
  width: ${rem(100)};
`;

const StyledDotSeparator = styled.hr`
  border: 0;
  border-top: ${rem(6)} dotted;
  color: #222;
  margin: ${rem(47)} auto;
  width: ${rem(48)};
`;

const Separator: FC<SeparatorProps> = ({
  type,
}: SeparatorProps) => {
  switch (type) {
    case 'line':
      return <StyledLineSeparator />;
    case 'dot':
      return <StyledDotSeparator />;
    default:
      return <StyledLineSeparator />;
  }
};

Separator.displayName = 'Separator';
Separator.defaultProps = {
  type: 'line',
};

export default Separator;
