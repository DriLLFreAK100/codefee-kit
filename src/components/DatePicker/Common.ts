import { Time } from 'utils/TimeHelper';

type Convertor = (next: string, prev: string) => string;

const guardNumeric: Convertor = (next, prev) => {
  if (next.length < prev.length) {
    return next;
  }

  if (Number.isNaN(Number(next[next.length - 1]))) {
    return prev;
  }

  return next;
};

const guardMaxCharacter: Convertor = (next, prev) => (next.length > 10 ? prev : next);

const trySlash: Convertor = (next, prev) => {
  if (next.length < prev.length && (next.length === 2 || next.length === 5)) {
    return next.substring(0, next.length - 1);
  }

  if ((next.length === 2 || next.length === 5)) {
    return `${next}/`;
  }

  return next;
};

const compose = (...convertors: Convertor[]): Convertor => (next, prev) => {
  let next$ = prev;

  return convertors.reduce((acc, convertor) => {
    next$ = convertor(acc, prev);
    return next$;
  }, next);
};

export const sanitizeInput = compose(
  guardMaxCharacter,
  guardNumeric,
  trySlash,
);

export const isValidDate = (value: string): boolean => !Number.isNaN(Date.parse(value));

const timeRegex = /^(0[1-9]|1[0-2]):([0-5][0-9]) ((a|p)m|(A|P)M)$/;

export const isValidTime = (value: string): boolean => !!new RegExp(timeRegex).exec(value);

export const getTimeFromStr = (value: string): Time | null => {
  const arr = new RegExp(timeRegex).exec(value);

  if (arr) {
    const [, hours, minutes, amPm] = arr;
    const rawHours = parseInt(hours, 10);

    return {
      hours: amPm.toLowerCase() === 'AM' ? rawHours : rawHours + 12,
      minutes: parseInt(minutes, 10),
    };
  }

  return null;
};
