import React, { FC, useCallback } from 'react';
import { fillArray } from 'utils/ArrayHelper';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';

const hourMarks = fillArray(12);

type EditHourModeProps = {
  hourDeg: number;
  onHourChange?: (hour: number) => void;
};

const EditHourMode: FC<EditHourModeProps> = ({
  hourDeg,
  onHourChange,
}: EditHourModeProps) => {
  const handleOnClickText = useCallback((minute: number) => () => {
    onHourChange?.(minute);
  }, [onHourChange]);

  return (
    <>
      <S.CenterGroup>
        {hourMarks.map((i) => {
          const { x, y } = polarToCartesian(0, 0, 260, i * 30);
          const hour = i === 0 ? 12 : i;

          return (
            <S.Text
              key={i}
              hour={i}
              x={x}
              y={y}
              onClick={handleOnClickText(hour)}
            >
              <tspan
                textAnchor="middle"
                alignmentBaseline="central"
              >
                {hour}
              </tspan>
            </S.Text>
          );
        })}
      </S.CenterGroup>

      <S.CenterGroup>
        <S.LongArm
          x1="0"
          x2="0"
          y1="0"
          y2="-220"
          transform={`rotate(${hourDeg})`}
        />
      </S.CenterGroup>
    </>
  );
};

EditHourMode.displayName = 'EditHourMode';
EditHourMode.defaultProps = {
  onHourChange: undefined,
};

export default EditHourMode;
