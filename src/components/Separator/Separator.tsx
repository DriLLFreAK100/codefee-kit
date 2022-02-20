import React, { FC } from 'react';
import * as S from './Separator.styled';

export type SeparatorType = 'line' | 'dot';

export interface SeparatorProps {
  type?: SeparatorType;
}

const Separator: FC<SeparatorProps> = ({
  type,
}: SeparatorProps) => {
  switch (type) {
    case 'line':
      return <S.LineSeparator />;
    case 'dot':
      return <S.DotSeparator />;
    default:
      return <S.LineSeparator />;
  }
};

Separator.displayName = 'Separator';
Separator.defaultProps = {
  type: 'line',
};

export default Separator;
