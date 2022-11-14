import { CodefeeTheme, ITheme } from 'common/Theme';
/* eslint-disable import/prefer-default-export */

/**
 * Function to override a target theme.
 * Properties provided will be merged against the target theme.
 * @param customTheme Custom Theme properties to override
 * @param overrideTarget Target Theme to override against
 */
export const overrideTheme = <T extends Partial<ITheme>>(
  customTheme: T,
  overrideTarget: ITheme = CodefeeTheme
): ITheme => ({
  ...overrideTarget,
  ...customTheme,
});
