import React, {
  forwardRef, HtmlHTMLAttributes, useCallback, useState,
} from 'react';
import EasyDate, { Day, defaultMonthLabels } from 'utils/DateHelper';
import { AngleLeft, AngleRight } from '../Icons';
import * as S from './CalendarPanel.styled';

export type CalendarPanelProps = {
  dayIndicatorLabels?: string[];
  monthLabels?: string[];
  onDateChange: (date: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

export type DateInfoLevel = 'year' | 'month' | 'day';

const CalendarPanel = forwardRef<HTMLDivElement, CalendarPanelProps>(
  (props: CalendarPanelProps, ref) => {
    const {
      monthLabels,
      dayIndicatorLabels,
      ...passThrough
    } = props;
    // const [dateInfoLevel] = useState<DateInfoLevel>('day');

    const [selectedDate, setSelectedDate] = useState(new EasyDate());
    const [viewMonth, setViewMonth] = useState(selectedDate);

    const handleClickDate = useCallback((day: Day) => () => {
      setSelectedDate(day.value);
    }, []);

    const handleClickPrev = useCallback(() => {
      setViewMonth(viewMonth.previousMonth);
    }, [viewMonth.previousMonth]);

    const handleClickNext = useCallback(() => {
      setViewMonth(viewMonth.nextMonth);
    }, [viewMonth.nextMonth]);

    return (
      <S.CalendarPanel
        ref={ref}
        {...passThrough}
      >
        <S.NavigationPanel>
          <S.NavButton onClick={handleClickPrev}>
            <AngleLeft />
          </S.NavButton>
          <S.Title>
            {viewMonth.format('MMM yyyy', monthLabels)}
          </S.Title>
          <S.NavButton onClick={handleClickNext}>
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
            viewMonth.daysInMonthArrPadded.map((d) => {
              const { type, value } = d;
              return (
                <S.DayTile
                  key={value.format()}
                  dayPeriod={type}
                  isActive={value.format() === selectedDate.format()}
                  onClick={handleClickDate(d)}
                >
                  {value.date}
                </S.DayTile>
              );
            })
          }
        </S.DaySelector>
      </S.CalendarPanel>
    );
  },
);

CalendarPanel.displayName = 'CalendarPanel';
CalendarPanel.defaultProps = {
  dayIndicatorLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  monthLabels: defaultMonthLabels,
};

export default CalendarPanel;
