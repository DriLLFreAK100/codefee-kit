import { useReducer, DispatchWithoutAction } from 'react';

/**
 * Custom hook to trigger rerender manually
 * @returns Func to trigger rerender
 */
const useRerender = (): { flag: boolean; rerender: DispatchWithoutAction } => {
  const [flag, rerender] = useReducer((x) => !x, true);
  return { flag, rerender };
};

export default useRerender;
