import React, { FC, useCallback } from 'react';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';
import { clockMarks } from './Common';

type EditHourModeProps = {
  hourDeg: number;
  hourMarks: string[];
  onHourChange?: (hour: number) => void;
};

const EditHourMode: FC<EditHourModeProps> = ({
  hourDeg,
  hourMarks,
  onHourChange,
}: EditHourModeProps) => {
  const handleOnClickText = useCallback((minute: number) => () => {
    onHourChange?.(minute);
  }, [onHourChange]);

  return (
    <>
      <S.CenterGroup>
        {clockMarks.map((i) => {
          const { x, y } = polarToCartesian(0, 0, 260, i * 30);

          return (
            <S.Text
              key={i}
              x={x}
              y={y}
              isEdit
              onClick={handleOnClickText(i === 0 ? 12 : i)}
            >
              <tspan
                textAnchor="middle"
                alignmentBaseline="central"
              >
                {hourMarks[i]}
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
          isAnimatable
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
