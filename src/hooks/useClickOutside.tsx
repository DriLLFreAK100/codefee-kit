import { RefObject, useEffect } from 'react';

/**
 * Hook to handle Clicking Outside element
 * @param ref Ref for inside element
 * @param callback Callback upon clicking anywhere outside of the element specified in ref
 */
const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref?.current && !ref?.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [ref, callback]);
};

export default useClickOutside;
