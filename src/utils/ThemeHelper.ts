import { CodefeeTheme, ITheme } from 'common/Theme';
/* eslint-disable import/prefer-default-export */

export const OverrideTheme = <T extends ITheme>(
  customTheme: T,
  overrideTarget: ITheme = CodefeeTheme,
): ITheme => {
  return {
    ...overrideTarget,
    ...customTheme,
  };
};
