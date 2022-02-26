import React, { FC } from 'react';
import { fillArray } from 'utils/ArrayHelper';
import * as S from './Clock.styled';

const hourMarks = fillArray(12);

type ViewModeProps = {
  hourDeg: number;
  minuteDeg: number;
};

const ViewMode: FC<ViewModeProps> = ({
  hourDeg,
  minuteDeg,
}: ViewModeProps) => (
  <>
    <S.CenterGroup>
      {hourMarks.map((i) => (
        <S.HourMark
          key={i}
          hour={i}
          x1="0"
          x2="0"
          y1="0"
          y2="-280"
        />
      ))}
    </S.CenterGroup>

    <S.CenterGroup>
      <S.LongArm
        x1="0"
        x2="0"
        y1="0"
        y2="-160"
        transform={`rotate(${hourDeg})`}
      />

      <S.ShortArm
        x1="0"
        x2="0"
        y1="0"
        y2="-220"
        transform={`rotate(${minuteDeg})`}
      />
    </S.CenterGroup>
  </>
);

ViewMode.displayName = 'ViewMode';
ViewMode.defaultProps = {};

export default ViewMode;
