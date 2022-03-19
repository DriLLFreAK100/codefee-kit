import EasyDate, { Day, defaultMonthLabels } from 'utils/DateHelper';
import { AngleLeft, AngleRight } from 'components/Icons';
import { Typography } from 'components/Typography';
import React, {
  FC, forwardRef, HtmlHTMLAttributes, useCallback, useState,
} from 'react';
import * as S from './CalendarPanel.styled';
import { DateInfoLevel, getTitle, switchLevel } from './Common';

type DayViewProps = {
  dayIndicatorLabels: string[];
  selectedDate: EasyDate;
  viewDate: EasyDate;
  handleClickDate: (day: Day) => () => void;
};

const DayView: FC<DayViewProps> = ({
  dayIndicatorLabels,
  selectedDate,
  viewDate,
  handleClickDate,
}: DayViewProps) => (
  <>
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
        viewDate.daysInMonthArrPadded.map((d) => {
          const { type, easyDate: value } = d;

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
  </>
);

type MonthViewProps = {
  monthLabels: string[];
  selectedDate: EasyDate;
  handleClickMonth: (month: number) => () => void;
};

const MonthView: FC<MonthViewProps> = ({
  monthLabels,
  selectedDate,
  handleClickMonth,
}: MonthViewProps) => (
  <S.MonthYearSelector>
    {monthLabels.map((label, i) => (
      <S.YearMonthTile
        key={label}
        isActive={selectedDate.month === i}
        onClick={handleClickMonth(i)}
      >
        {label}
      </S.YearMonthTile>
    ))}
  </S.MonthYearSelector>
);

type YearViewProps = {
  selectedDate: EasyDate;
};

const YearView: FC<YearViewProps> = ({
  selectedDate,
}: YearViewProps) => (
  <S.MonthYearSelector>
    {selectedDate.yearsArrPadded.map((year) => (
      <S.YearMonthTile
        key={year}
        isActive={selectedDate.year === year}
      >
        {year}
      </S.YearMonthTile>
    ))}
  </S.MonthYearSelector>
);

export type CalendarPanelProps = {
  dayIndicatorLabels?: string[];
  monthLabels?: string[];
  onDateChange: (date: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const CalendarPanel = forwardRef<HTMLDivElement, CalendarPanelProps>(
  (props: CalendarPanelProps, ref) => {
    const {
      monthLabels,
      dayIndicatorLabels,
      onDateChange,
      ...passThrough
    } = props;

    const [selectedDate, setSelectedDate] = useState(new EasyDate());
    const [viewDate, setViewDate] = useState(selectedDate);
    const [level, setLevel] = useState<DateInfoLevel>('day');

    const handleClickDate = useCallback(({ easyDate }: Day) => () => {
      setSelectedDate(easyDate);
      setViewDate(easyDate);
      onDateChange(easyDate.value);
    }, [onDateChange]);

    const handleClickMonth = useCallback((month: number) => () => {
      const updated = new EasyDate(selectedDate.setMonth(month).value);
      setSelectedDate(updated);
      setViewDate(updated);
      onDateChange(updated.value);
      setLevel('day');
    }, [onDateChange, selectedDate]);

    const handleClickPrev = useCallback(() => {
      setViewDate(viewDate.previousMonth);
    }, [viewDate.previousMonth]);

    const handleClickNext = useCallback(() => {
      setViewDate(viewDate.nextMonth);
    }, [viewDate.nextMonth]);

    const handleClickTitleButton = useCallback(() => {
      switchLevel(
        level,
        () => setLevel('month'),
        () => setLevel('year'),
      );
    }, [level]);

    const title = getTitle(viewDate, level, monthLabels as string[]);
    const isDisableTitle = level === 'year';

    const ViewComponent = switchLevel(
      level,
      () => (
        <DayView
          dayIndicatorLabels={dayIndicatorLabels as string[]}
          selectedDate={selectedDate}
          viewDate={viewDate}
          handleClickDate={handleClickDate}
        />
      ),
      () => (
        <MonthView
          monthLabels={monthLabels as string[]}
          selectedDate={selectedDate}
          handleClickMonth={handleClickMonth}
        />
      ),
      () => (
        <YearView
          selectedDate={selectedDate}
        />
      ),
    );

    return (
      <S.CalendarPanel
        ref={ref}
        {...passThrough}
      >
        <S.NavigationPanel>
          <S.NavButton onClick={handleClickPrev}>
            <AngleLeft />
          </S.NavButton>

          <S.TitleButton
            disabled={isDisableTitle}
            onClick={handleClickTitleButton}
          >
            <Typography>
              {title}
            </Typography>
          </S.TitleButton>

          <S.NavButton onClick={handleClickNext}>
            <AngleRight />
          </S.NavButton>
        </S.NavigationPanel>

        {ViewComponent}
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
