import { polarToCartesian } from 'utils/MathHelper';
import React, {
  FC,
  MouseEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import * as S from './Clock.styled';
import {
  activeCircleRadius,
  calcMajorDeg,
  calcMinorDeg,
  calcTouchMinutes,
  clockMarks,
  markRadius,
  minutesMarks,
} from './Common';

type EditMinuteModeProps = {
  centerDomRect: DOMRect | undefined;
  minutes: number;
  minuteMarks: string[];
  onMinuteChange?: (minute: number) => void;
};

const EditMinuteMode: FC<EditMinuteModeProps> = ({
  centerDomRect,
  minutes,
  minuteMarks,
  onMinuteChange,
}: EditMinuteModeProps) => {
  const isDragging = useRef(false);
  const [internalMinutes, setInternalMinutes] = useState(minutes);
  const internalMinuteDeg = calcMinorDeg(internalMinutes);

  useLayoutEffect(() => setInternalMinutes(minutes), [minutes]);

  const handleDragging = useCallback(
    ({ clientX, clientY }: MouseEvent<SVGRectElement>, isEnd = false) => {
      if (isDragging.current && centerDomRect) {
        const value = calcTouchMinutes(centerDomRect, clientX, clientY);
        setInternalMinutes(value);

        if (isEnd) {
          onMinuteChange?.(value);
        }
      }
    },
    [centerDomRect, onMinuteChange]
  );

  const handleDragStart = useCallback(
    (e: MouseEvent<SVGRectElement>) => {
      isDragging.current = true;
      handleDragging(e);
    },
    [handleDragging]
  );

  const handleDragEnd = useCallback(
    (e: MouseEvent<SVGRectElement>) => {
      handleDragging(e, true);
      isDragging.current = false;
    },
    [handleDragging]
  );

  return (
    <>
      <S.CenterGroup>
        {minutesMarks.map((i) => {
          const { x, y } = polarToCartesian(0, 0, markRadius, calcMinorDeg(i));
          return (
            internalMinutes === i && (
              <S.ActiveCircle key={i} cx={x} cy={y} r={activeCircleRadius} />
            )
          );
        })}

        {clockMarks.map((i) => {
          const { x, y } = polarToCartesian(0, 0, markRadius, calcMajorDeg(i));
          const isActive = internalMinutes === i * 5;

          return (
            <S.Text key={i} x={x} y={y} isActive={isActive}>
              <tspan textAnchor="middle" alignmentBaseline="central">
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
