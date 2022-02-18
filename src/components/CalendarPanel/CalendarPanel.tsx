import React, { forwardRef, HtmlHTMLAttributes } from 'react';
import * as S from './CalendarPanel.styled';

export type CalendarPanelProps = {
  onDateChange: (date: Date) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const CalendarPanel = forwardRef<HTMLDivElement, CalendarPanelProps>(
  (props: CalendarPanelProps, ref) => (
    <S.CalendarPanel
      ref={ref}
      {...props}
    >
      <S.NavigationPanel>
        Some Date
      </S.NavigationPanel>
      <S.DaySelector>
        Some Day
      </S.DaySelector>
    </S.CalendarPanel>
  ),
);

CalendarPanel.displayName = 'CalendarPanel';
CalendarPanel.defaultProps = {
};

export default CalendarPanel;
