export type Time = {
  hours: number;
  minutes: number;
  seconds?: number;
};

export type TimeUnit = 'hour' | 'minute' | 'second';

export type TimePeriod = 'AM' | 'PM';

export const padTime = (val: string): string => val.padStart(2, '0');

class EasyTime {
  public value: Time;

  constructor(time?: Time) {
    if (!time) {
      const currDate = new Date();

      this.value = {
        hours: currDate.getHours(),
        minutes: currDate.getMinutes(),
        seconds: currDate.getSeconds(),
      };

      return;
    }

    this.value = time;
  }

  public get hours(): number {
    return this.value.hours;
  }

  public get minutes(): number {
    return this.value.minutes;
  }

  public get seconds(): number {
    return this.value.seconds || 0;
  }

  public get hoursString(): string {
    return padTime(this.hours.toString());
  }

  public get minutesString(): string {
    return padTime(this.minutes.toString());
  }

  public get secondsString(): string {
    return padTime(this.seconds.toString());
  }

  public get clonedValue(): Time {
    return { ...this.value };
  }

  public setTime(value: Time): EasyTime {
    this.value = value;
    return this;
  }

  public setHours(hours: number): EasyTime {
    if (hours >= 24) {
      return this;
    }

    this.value.hours = hours;
    return this;
  }

  public setMinutes(minutes: number): EasyTime {
    if (minutes >= 60) {
      return this;
    }

    this.value.minutes = minutes;
    return this;
  }

  public setSeconds(seconds: number): EasyTime {
    if (seconds >= 60) {
      return this;
    }

    this.value.seconds = seconds;
    return this;
  }

  public setPeriod(timePeriod: TimePeriod): EasyTime {
    if (timePeriod === 'AM' && this.hours >= 12) {
      this.value.hours -= 12;
      return this;
    }

    if (timePeriod === 'PM' && this.hours < 12) {
      this.value.hours += 12;
      return this;
    }

    return this;
  }
}

export default EasyTime;