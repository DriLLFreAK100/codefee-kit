import React, { FC, useCallback } from 'react';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';
import { clockMarks } from './Common';

type EditMinuteModeProps = {
  minuteDeg: number;
  minuteMarks: string[];
  onMinuteChange?: (minute: number) => void;
};

const EditMinuteMode: FC<EditMinuteModeProps> = ({
  minuteDeg,
  minuteMarks,
  onMinuteChange,
}: EditMinuteModeProps) => {
  const handleOnClickText = useCallback((minute: number) => () => {
    onMinuteChange?.(minute);
  }, [onMinuteChange]);

  return (
    <>
      <S.CenterGroup>
        {clockMarks.map((i) => {
          const { x, y } = polarToCartesian(0, 0, 260, i * 30);
          const minute = i * 5;

          return (
            <S.Text
              key={i}
              x={x}
              y={y}
              isEdit
              onClick={handleOnClickText(minute)}
            >
              <tspan
                textAnchor="middle"
                alignmentBaseline="central"
              >
                {minuteMarks[i]}
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
