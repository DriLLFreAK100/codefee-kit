import { polarToCartesian } from 'utils/MathHelper';
import React, {
  FC, MouseEvent, useCallback, useLayoutEffect, useRef, useState,
} from 'react';
import * as S from './Clock.styled';
import { calcTouchHours, clockMarks, indexizeHour } from './Common';

type EditHourModeProps = {
  centerDomRect: DOMRect | undefined;
  hours: number;
  hourMarks: string[];
  onHourChange?: (hour: number) => void;
};

const EditHourMode: FC<EditHourModeProps> = ({
  centerDomRect,
  hours,
  hourMarks,
  onHourChange,
}: EditHourModeProps) => {
  const isDragging = useRef(false);
  const [internalHours, setInternalHours] = useState(hours);
  const internalHourDeg = internalHours * 30;
  const activeMark = indexizeHour(internalHours);

  useLayoutEffect(() => setInternalHours(hours), [hours]);

  const handleDragging = useCallback((
    { clientX, clientY }: MouseEvent<SVGRectElement>,
    isEnd = false,
  ) => {
    if (isDragging.current && centerDomRect) {
      const value = calcTouchHours(centerDomRect, clientX, clientY);
      setInternalHours(value);

      if (isEnd) {
        onHourChange?.(value);
      }
    }
  }, [centerDomRect, onHourChange]);

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
          const isActive = activeMark === i;

          return (
            <>
              {isActive && <S.ActiveCircle cx={x} cy={y} r="28" />}
              <S.Text
                key={i}
                x={x}
                y={y}
                isActive={isActive}
              >
                <tspan
                  textAnchor="middle"
                  alignmentBaseline="central"
                >
                  {hourMarks[i]}
                </tspan>
              </S.Text>
            </>
          );
        })}
      </S.CenterGroup>

      <S.CenterGroup>
        <S.LongArm
          x1="0"
          x2="0"
          y1="0"
          y2="-220"
          transform={`rotate(${internalHourDeg})`}
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

EditHourMode.displayName = 'EditHourMode';
EditHourMode.defaultProps = {
  onHourChange: undefined,
};

export default EditHourMode;
