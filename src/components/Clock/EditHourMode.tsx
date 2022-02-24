import React, { FC } from 'react';
import { fillArray } from 'utils/ArrayHelper';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';

const hourMarks = fillArray(12);

type EditHourModeProps = {
  hourDeg: number;
};

const EditHourMode: FC<EditHourModeProps> = ({
  hourDeg,
}: EditHourModeProps) => (
  <>
    <S.CenterGroup>
      {hourMarks.map((i) => {
        const { x, y } = polarToCartesian(0, 0, 260, i * 30);

        return (
          <S.HourText
            key={i}
            hour={i}
            x={x}
            y={y}
          >
            <tspan
              textAnchor="middle"
              alignmentBaseline="central"
            >
              {i === 0 ? 12 : i}
            </tspan>
          </S.HourText>
        );
      })}
    </S.CenterGroup>

    <S.CenterGroup>
      <S.HourArm
        x1="0"
        x2="0"
        y1="0"
        y2="-220"
        transform={`rotate(${hourDeg})`}
      />
    </S.CenterGroup>
  </>
);

EditHourMode.displayName = 'EditHourMode';
EditHourMode.defaultProps = {};

export default EditHourMode;
