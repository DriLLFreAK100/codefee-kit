import { fillArray } from './ArrayHelper';

describe('fillArray', () => {
  test('should be able to fill array by size specified', () => {
    expect(fillArray(5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should be able to fill array with custom behavior', () => {
    expect(fillArray(5, (i) => i * 2)).toEqual([0, 2, 4, 6, 8]);
  });
});
