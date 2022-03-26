import { useEffect, useState } from 'react';

/**
 * Naively indicates whether an value has been touched
 * @param value
 * @returns
 */
const useIsTouched = (value: string): boolean => {
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (!isTouched && value) {
      setIsTouched(true);
    }
  }, [isTouched, value]);

  return isTouched;
};

export default useIsTouched;
