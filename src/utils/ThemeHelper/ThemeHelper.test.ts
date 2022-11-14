import { CodefeeTheme } from 'common/Theme';
import { describe, test, expect } from 'vitest';
import { overrideTheme } from './ThemeHelper';

describe('withOverrideTheme', () => {
  test('should be able to produce a full theme overriding a portion of target theme', () => {
    expect(
      overrideTheme(
        {
          '--color-primary': '#FF5733',
        },
        CodefeeTheme
      )
    ).toEqual({
      ...CodefeeTheme,
      '--color-primary': '#FF5733',
    });
  });
});
