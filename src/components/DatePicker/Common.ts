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

const guardMaxCharacter = (
  max: number,
): Convertor => (next, prev) => (next.length > max ? prev : next);

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

export const sanitizeDateInput = compose(
  guardMaxCharacter(10),
  guardNumeric,
  trySlash,
);

export const sanitizeDateTimeInput = (next: string, prev: string): string => {
  if (next.length <= 10) {
    return sanitizeDateInput(next, prev);
  }

  if ((next.length === 11 && next[10] === ' ')
    || (next.length > 11 && next.length < 20)) {
    return next;
  }

  return prev;
};

export const isValidDate = (value: string): boolean => !!Date.parse(value);

const timeRegex = /^(0[1-9]|1[0-2]):([0-5][0-9]) ((a|p)m|(A|P)M)$/;

export const isValidTime = (value: string): boolean => !!new RegExp(timeRegex).exec(value);

export const getTimeFromStr = (value: string): Time | null => {
  const dateString = `01/01/2001 ${value}`; // Using a dummy date, since time is main topic here

  if (Date.parse(dateString)) {
    const date = new Date(dateString);

    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
    };
  }

  return null;
};
