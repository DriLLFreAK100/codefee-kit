import React, { FC, useCallback } from 'react';
import { fillArray } from 'utils/ArrayHelper';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';

const minuteMarks = fillArray(12);

type EditMinuteModeProps = {
  minuteDeg: number;
  onMinuteChange?: (minute: number) => void;
};

const EditMinuteMode: FC<EditMinuteModeProps> = ({
  minuteDeg,
  onMinuteChange,
}: EditMinuteModeProps) => {
  const handleOnClickText = useCallback((minute: number) => () => {
    onMinuteChange?.(minute);
  }, [onMinuteChange]);

  return (
    <>
      <S.CenterGroup>
        {minuteMarks.map((i) => {
          const { x, y } = polarToCartesian(0, 0, 260, i * 30);
          const minute = i * 5;

          return (
            <S.Text
              key={i}
              hour={i}
              x={x}
              y={y}
              onClick={handleOnClickText(minute)}
            >
              <tspan
                textAnchor="middle"
                alignmentBaseline="central"
              >
                {i === 0 ? 60 : minute.toString().padStart(2, '0')}
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
          transform={`rotate(${minuteDeg})`}
        />
      </S.CenterGroup>
    </>
  );
};

EditMinuteMode.displayName = 'EditMinuteMode';
EditMinuteMode.defaultProps = {
  onMinuteChange: undefined,
};

export default EditMinuteMode;
