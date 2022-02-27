import React, { FC } from 'react';
import { polarToCartesian } from 'utils/MathHelper';
import * as S from './Clock.styled';
import { clockMarks, ViewStyle } from './Common';

type ViewModeProps = {
  hourDeg: number;
  minuteDeg: number;
  viewStyle?: ViewStyle;
};

const hourTextStyle = clockMarks.map((i) => {
  const { x, y } = polarToCartesian(0, 0, 260, i * 30);
  const hour = i === 0 ? 12 : i;

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
        {hour}
      </tspan>
    </S.Text>
  );
});

const lineStyle = clockMarks.map((i) => (
  <S.HourMark
    key={i}
    hour={i}
    x1="0"
    x2="0"
    y1="0"
    y2="-280"
  />
));

const componentDict: { [key in ViewStyle]: JSX.Element[] } = {
  line: lineStyle,
  hourText: hourTextStyle,
};

const ViewMode: FC<ViewModeProps> = ({
  hourDeg,
  minuteDeg,
  viewStyle,
}: ViewModeProps) => {
  const HourViewComponent = componentDict[viewStyle as ViewStyle];

  return (
    <>
      <S.CenterGroup>
        {HourViewComponent}
      </S.CenterGroup>

      <S.CenterGroup>
        <S.LongArm
          x1="0"
          x2="0"
          y1="0"
          y2="-160"
          transform={`rotate(${hourDeg})`}
        />

        <S.ShortArm
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

ViewMode.displayName = 'ViewMode';
ViewMode.defaultProps = {
  viewStyle: 'line',
};

export default ViewMode;
