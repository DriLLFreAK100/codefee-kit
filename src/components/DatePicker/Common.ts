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

export const isValidDate = (value: string): boolean => !value || !Number.isNaN(Date.parse(value));
