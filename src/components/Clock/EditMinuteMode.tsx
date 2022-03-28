import React, {
  FC, MouseEvent, useCallback, useLayoutEffect, useRef, useState,
} from 'react';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';
import { calcTouchMinutes, clockMarks } from './Common';

type EditMinuteModeProps = {
  centerDomRect: DOMRect | undefined;
  minuteDeg: number;
  minuteMarks: string[];
  onMinuteChange?: (minute: number) => void;
};

const EditMinuteMode: FC<EditMinuteModeProps> = ({
  centerDomRect,
  minuteDeg,
  minuteMarks,
  onMinuteChange,
}: EditMinuteModeProps) => {
  const isDragging = useRef(false);
  const [internalMinuteDeg, setInternalMinuteDeg] = useState(minuteDeg);

  useLayoutEffect(() => setInternalMinuteDeg(minuteDeg), [minuteDeg]);

  const handleDragging = useCallback((
    { clientX, clientY }: MouseEvent<SVGRectElement>,
    isEnd = false,
  ) => {
    if (isDragging.current && centerDomRect) {
      const value = calcTouchMinutes(centerDomRect, clientX, clientY);
      setInternalMinuteDeg(value * 6);

      if (isEnd) {
        onMinuteChange?.(value);
      }
    }
  }, [centerDomRect, onMinuteChange]);

  const handleDragStart = useCallback((e: MouseEvent<SVGRectElement>) => {
    isDragging.current = true;
    handleDragging(e);
  }, [handleDragging]);

  const handleDragEnd = useCallback((e: MouseEvent<SVGRectElement>) => {
    handleDragging(e, true);
    isDragging.current = false;
  }, [handleDragging]);

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
          transform={`rotate(${internalMinuteDeg})`}
        />
      </S.CenterGroup>

      <S.HourMinuteOverlay
        onMouseDown={handleDragStart}
        onMouseMove={handleDragging}
        onMouseUp={handleDragEnd}
      />
    </>
  );
};

EditMinuteMode.displayName = 'EditMinuteMode';
EditMinuteMode.defaultProps = {
  onMinuteChange: undefined,
};

export default EditMinuteMode;
