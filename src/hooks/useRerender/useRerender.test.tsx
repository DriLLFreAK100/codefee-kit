import { describe, expect, test } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';
import useRerender from './useRerender';

describe('useRerender', () => {
  test('should be able to trigger rerender', () => {
    const { result } = renderHook(() => useRerender());

    expect(result.current.flag).toBeTruthy();

    act(() => {
      result.current.rerender();
    });

    expect(result.current.flag).toBeFalsy();
  });
});
