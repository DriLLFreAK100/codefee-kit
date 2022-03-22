import EasyDate, { Day, defaultMonthLabels } from 'utils/DateHelper';
import { AngleLeft, AngleRight } from 'components/Icons';
import { Typography } from 'components/Typography';
import React, {
  FC, forwardRef, HtmlHTMLAttributes, MouseEvent, useCallback, useEffect, useMemo, useState,
} from 'react';
import { DateInfoLevel, switchLevel, withStopPropagation } from './Common';
import * as S from './CalendarPanel.styled';

type DayViewProps = {
  dayIndicatorLabels: string[];
  selectedDate: EasyDate;
  viewDate: EasyDate;
  handleClickDate: (day: Day) => (e: MouseEvent<HTMLButtonElement>) => void;
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
  handleClickMonth: (month: number) => (e: MouseEvent<HTMLButtonElement>) => void;
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
  viewDate: EasyDate;
  handleClickYear: (year: number) => (e: MouseEvent<HTMLButtonElement>) => void;
};

const YearView: FC<YearViewProps> = ({
  selectedDate,
  viewDate,
  handleClickYear,
}: YearViewProps) => (
  <S.MonthYearSelector>
    {viewDate.yearsInFrame.map((year) => (
      <S.YearMonthTile
        key={year}
        isActive={selectedDate.year === year}
        onClick={handleClickYear(year)}
      >
        {year}
      </S.YearMonthTile>
    ))}
  </S.MonthYearSelector>
);

export type CalendarPanelOptions = {
  dayIndicatorLabels?: string[];
  monthLabels?: string[];
  placeholderYearLabel?: string;
};

export type CalendarPanelProps = {
  date?: Date;
  onDateChange?: (date: Date) => void;
  onMonthChange?: (date: Date) => void;
  onYearChange?: (date: Date) => void;
} & CalendarPanelOptions & HtmlHTMLAttributes<HTMLDivElement>;

const CalendarPanel = forwardRef<HTMLDivElement, CalendarPanelProps>(
  (props: CalendarPanelProps, ref) => {
    const {
      date,
      monthLabels,
      dayIndicatorLabels,
      placeholderYearLabel,
      onDateChange,
      onMonthChange,
      onYearChange,
      ...passThrough
    } = props;

    const [selectedDate, setSelectedDate] = useState(new EasyDate(date));
    const [viewDate, setViewDate] = useState(selectedDate);
    const [level, setLevel] = useState<DateInfoLevel>('day');

    useEffect(() => setSelectedDate(new EasyDate(date)), [date]);

    const handleClickDate = useCallback(({ easyDate }: Day) => withStopPropagation(() => {
      setViewDate(easyDate);
      onDateChange?.(easyDate.value);
    }), [onDateChange]);

    const handleClickMonth = useCallback((month: number) => withStopPropagation(() => {
      const updated = new EasyDate(selectedDate.setMonth(month).value);
      setViewDate(updated);
      onMonthChange?.(updated.value);
      setLevel('day');
    }), [onMonthChange, selectedDate]);

    const handleClickYear = useCallback((year: number) => withStopPropagation(() => {
      const updated = new EasyDate(selectedDate.setYear(year).value);
      setViewDate(updated);
      onYearChange?.(updated.value);
      setLevel('month');
    }), [onYearChange, selectedDate]);

    const handleClickPrev = useCallback(() => {
      switchLevel(
        level,
        () => setViewDate(viewDate.previousMonth),
        undefined,
        () => setViewDate(viewDate.previousYearByFrame),
      );
    }, [level, viewDate.previousMonth, viewDate.previousYearByFrame]);

    const handleClickNext = useCallback(() => {
      switchLevel(
        level,
        () => setViewDate(viewDate.nextMonth),
        undefined,
        () => setViewDate(viewDate.nextYearByFrame),
      );
    }, [level, viewDate.nextMonth, viewDate.nextYearByFrame]);

    const handleClickTitleButton = useCallback(() => {
      switchLevel(
        level,
        () => setLevel('month'),
        () => setLevel('year'),
      );
    }, [level]);

    const title = switchLevel(
      level,
      () => viewDate.format('MMM yyyy', monthLabels),
      () => viewDate.format('yyyy'),
      () => placeholderYearLabel,
    ) as string;

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
          viewDate={viewDate}
          handleClickYear={handleClickYear}
        />
      ),
    );

    const PrevNavButton = useMemo(() => level !== 'month' && (
      <S.NavButton onClick={handleClickPrev}>
        <AngleLeft />
      </S.NavButton>
    ), [handleClickPrev, level]);

    const NextNavButton = useMemo(() => level !== 'month' && (
      <S.NavButton onClick={handleClickNext}>
        <AngleRight />
      </S.NavButton>
    ), [handleClickNext, level]);

    return (
      <S.CalendarPanel
        ref={ref}
        {...passThrough}
      >
        <S.NavigationPanel>
          {PrevNavButton}
          <S.TitleButton
            disabled={isDisableTitle}
            onClick={handleClickTitleButton}
          >
            <Typography>
              {title}
            </Typography>
          </S.TitleButton>
          {NextNavButton}
        </S.NavigationPanel>

        {ViewComponent}
      </S.CalendarPanel>
    );
  },
);

CalendarPanel.displayName = 'CalendarPanel';
CalendarPanel.defaultProps = {
  date: new Date(),
  dayIndicatorLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  monthLabels: defaultMonthLabels,
  placeholderYearLabel: 'Year',
  onDateChange: undefined,
  onMonthChange: undefined,
  onYearChange: undefined,
};

export default CalendarPanel;
