import React, { FC } from 'react';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';
import { calcMajorDeg, clockMarks, markRadius, ViewStyle } from './Common';

type ViewModeProps = {
  hourDeg: number;
  minuteDeg: number;
  secondsDeg: number;
  isRealtime?: boolean;
  viewStyle?: ViewStyle;
};

const hourTextStyle = clockMarks.map((i) => {
  const { x, y } = polarToCartesian(0, 0, markRadius, calcMajorDeg(i));
  const hour = i === 0 ? 12 : i;

  return (
    <S.Text key={i} x={x} y={y}>
      <tspan textAnchor="middle" alignmentBaseline="central">
        {hour}
      </tspan>
    </S.Text>
  );
});

const lineStyle = clockMarks.map((i) => (
  <S.HourMark key={i} hour={i} x1="0" x2="0" y1="0" y2="-280" />
));

const componentDict: { [key in ViewStyle]: JSX.Element[] } = {
  line: lineStyle,
  hourText: hourTextStyle,
};

const ViewMode: FC<ViewModeProps> = ({
  hourDeg,
  minuteDeg,
  secondsDeg,
  isRealtime,
  viewStyle,
}: ViewModeProps) => {
  const HourViewComponent = componentDict[viewStyle as ViewStyle];

  return (
    <>
      <S.CenterGroup>{HourViewComponent}</S.CenterGroup>

      <S.CenterGroup>
        <S.ShortArm
          x1="0"
          x2="0"
          y1="0"
          y2="-160"
          transform={`rotate(${hourDeg})`}
        />

        <S.LongArm
          x1="0"
          x2="0"
          y1="0"
          y2="-220"
          transform={`rotate(${minuteDeg})`}
        />

        {isRealtime && (
          <S.SecondsArm
            x1="0"
            x2="0"
            y1="0"
            y2="-220"
            transform={`rotate(${secondsDeg})`}
          />
        )}
      </S.CenterGroup>
    </>
  );
};

ViewMode.displayName = 'ViewMode';
ViewMode.defaultProps = {
  isRealtime: false,
  viewStyle: 'line',
};

export default ViewMode;
