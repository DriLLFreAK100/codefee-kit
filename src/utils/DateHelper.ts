import { fillArray } from './ArrayHelper';
/* eslint-disable prefer-template */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */

export type DayPeriod = 'current' | 'prev' | 'next';

export type DateDisplayReservedWords = 'yyyy' | 'MM' | 'MMM' | 'dd';

export const defaultMonthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export type Day = {
  type: DayPeriod,
  easyDate: EasyDate;
};

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

  public get date(): number {
    return this.value.getDate();
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
    const arr = fillArray<number>(this.daysInMonth + 1);
    arr.shift();

    return arr.map((d) => ({
      type: 'current',
      easyDate: new EasyDate(new Date(
        this.year,
        this.month,
        d,
      )),
    }));
  }

  public get daysInMonthArrPadded(): Day[] {
    let prevMonthDays = this.previousMonth.daysInMonth;
    const prevMonth: Day[] = fillArray(this.firstDay)
      .map(() => prevMonthDays--)
      .reverse()
      .map((day) => ({
        type: 'prev',
        easyDate: new EasyDate(new Date(
          this.previousMonth.year,
          this.previousMonth.month,
          day,
        )),
      }));

    const currentMonth: Day[] = this.daysInMonthArr.map(({ easyDate }) => ({
      type: 'current',
      easyDate,
    }));

    const nextMonth: Day[] = fillArray(6 - this.lastDay).map((_, i) => ({
      type: 'next',
      easyDate: new EasyDate(new Date(
        this.nextMonth.year,
        this.nextMonth.month,
        i + 1,
      )),
    }));

    return [
      ...prevMonth,
      ...currentMonth,
      ...nextMonth,
    ];
  }

  public get previousMonth(): EasyDate {
    return new EasyDate(new Date(this.year, this.month - 1));
  }

  public get nextMonth(): EasyDate {
    return new EasyDate(new Date(this.year, this.month + 1));
  }

  public format(
    format = 'yyyy/MM/dd',
    monthLabels = defaultMonthLabels,
  ): string {
    const replacer: { [key in DateDisplayReservedWords]: () => string } = {
      yyyy: () => this.year.toString(),
      MMM: () => monthLabels[this.month],
      MM: () => (this.month + 1).toString().padStart(2, '0'),
      dd: () => this.date.toString().padStart(2, '0'),
    };
    const reservedWords = Object.keys(replacer) as DateDisplayReservedWords[];

    let display: string = format;

    reservedWords.forEach((r) => {
      display = display.replace(r, replacer[r]());
    });

    return display;
  }
}

export default EasyDate;
