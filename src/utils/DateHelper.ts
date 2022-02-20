import { fillArray } from './ArrayHelper';

/* eslint-disable no-plusplus */
class EasyDate {
  public value: Date;

  constructor(date: Date = new Date()) {
    this.value = date;
  }

  public get year(): number {
    return this.value.getFullYear();
  }

  public get month(): number {
    return this.value.getMonth();
  }

  public get firstDay(): number {
    return new Date(this.year, this.month, 1).getDay();
  }

  public get lastDay(): number {
    return new Date(this.year, this.month + 1, 0).getDay();
  }

  public get daysInMonth(): number {
    return new Date(this.year, this.month + 1, 0).getDate();
  }

  public get daysInMonthArr(): Day[] {
    const arr = fillArray(this.daysInMonth + 1);
    arr.shift();

    return arr.map((d) => ({
      type: 'current',
      value: d,
    }));
  }

  public get daysInMonthArrPadded(): Day[] {
    let prevMonthDays = this.previousMonth.daysInMonth;
    const prevMonth: Day[] = fillArray(this.firstDay).map(() => ({
      type: 'prev',
      value: prevMonthDays--,
    }));

    const currentMonth: Day[] = this.daysInMonthArr.map(({ value }) => ({
      type: 'current',
      value,
    }));

    const nextMonth: Day[] = fillArray(6 - this.lastDay).map((_, i) => ({
      type: 'next',
      value: i + 1,
    }));

    return [
      ...prevMonth,
      ...currentMonth,
      ...nextMonth,
    ];
  }

  public get previousMonth(): EasyDate {
    const p = new Date(this.value);
    p.setMonth(p.getMonth() - 1);
    return new EasyDate(p);
  }

  public get nextMonth(): EasyDate {
    const p = new Date(this.value);
    p.setMonth(p.getMonth() + 1);
    return new EasyDate(p);
  }
}

export type DayPeriod = 'current' | 'prev' | 'next';

export type Day = {
  type: DayPeriod,
  value: number;
};

export default EasyDate;
