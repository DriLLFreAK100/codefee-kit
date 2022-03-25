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

export type EasyDateOptions = {
  yearFrame: number
};

export const defaultEasyDateOptions: EasyDateOptions = {
  yearFrame: 12,
};

class EasyDate {
  public value: Date;

  private options: EasyDateOptions;

  constructor(
    date: Date = new Date(),
    options = defaultEasyDateOptions,
  ) {
    this.value = date;
    this.options = {
      ...defaultEasyDateOptions,
      ...options,
    };
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

  public get yearsInFrame(): number[] {
    const paddedYears = [];
    const yearPosition = this.year % this.yearFrame;

    for (let a = 0; a < this.yearFrame; a++) {
      const diff = yearPosition - a;
      paddedYears.push(this.year - diff);
    }

    return paddedYears;
  }

  public get yearsInFrameRange(): [number, number] {
    const frame = this.yearsInFrame;
    return [frame[0], frame[this.options.yearFrame - 1]];
  }

  public get previousYearByFrame(): EasyDate {
    return new EasyDate(new Date(this.year - this.yearFrame, this.month));
  }

  public get nextYearByFrame(): EasyDate {
    return new EasyDate(new Date(this.year + this.yearFrame, this.month - 1));
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

  public setMonth(month: number): EasyDate {
    this.value.setMonth(month);
    return this;
  }

  public setYear(year: number): EasyDate {
    this.value.setFullYear(year);
    return this;
  }

  private get yearFrame(): number {
    return this.options.yearFrame;
  }
}

export default EasyDate;
