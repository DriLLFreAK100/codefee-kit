import React, { FC } from 'react';
import { fillArray } from 'utils/ArrayHelper';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';

const minuteMarks = fillArray(12);

type EditMinuteModeProps = {
  minuteDeg: number;
};

const EditMinuteMode: FC<EditMinuteModeProps> = ({
  minuteDeg,
}: EditMinuteModeProps) => (
  <>
    <S.CenterGroup>
      {minuteMarks.map((i) => {
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
              {i === 0 ? 60 : (i * 5).toString().padStart(2, '0')}
            </tspan>
          </S.HourText>
        );
      })}
    </S.CenterGroup>

    <S.CenterGroup>
      <S.LongArm
        x1="0"
        x2="0"
        y1="0"
        y2="-220"
        transform={`rotate(${minuteDeg})`}
      />
    </S.CenterGroup>
  </>
);

EditMinuteMode.displayName = 'EditMinuteMode';
EditMinuteMode.defaultProps = {};

export default EditMinuteMode;
