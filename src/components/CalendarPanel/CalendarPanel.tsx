import React, { forwardRef, HtmlHTMLAttributes, useState } from 'react';
import EasyDate from 'utils/DateHelper';
import { AngleLeft, AngleRight } from '../Icons';
import * as S from './CalendarPanel.styled';

export type CalendarPanelProps = {
  dayIndicatorLabels?: string[];
  onDateChange: (date: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

export type DateInfoLevel = 'year' | 'month' | 'day';

const CalendarPanel = forwardRef<HTMLDivElement, CalendarPanelProps>(
  (props: CalendarPanelProps, ref) => {
    const {
      dayIndicatorLabels,
      ...passThrough
    } = props;
    // const [dateInfoLevel] = useState<DateInfoLevel>('day');

    const [selectedDate] = useState(new EasyDate());

    return (
      <S.CalendarPanel
        ref={ref}
        {...passThrough}
      >
        <S.NavigationPanel>
          <S.NavButton>
            <AngleLeft />
          </S.NavButton>
          <S.Title>
            Some Date
          </S.Title>
          <S.NavButton>
            <AngleRight />
          </S.NavButton>
        </S.NavigationPanel>
        <S.DayIndicator>
          {
            dayIndicatorLabels?.map((d) => (
              <S.DayIndicatorTile key={d}>
                {d}
              </S.DayIndicatorTile>
            ))
          }
        </S.DayIndicator>
        <S.DaySelector>
          {
            selectedDate.daysInMonthArrPadded.map(({ type, value }) => (
              <S.DayTile
                key={`${type}-${value}`}
                dayPeriod={type}
              >
                {value}
              </S.DayTile>
            ))
          }
        </S.DaySelector>
      </S.CalendarPanel>
    );
  },
);

CalendarPanel.displayName = 'CalendarPanel';
CalendarPanel.defaultProps = {
  dayIndicatorLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

export default CalendarPanel;
