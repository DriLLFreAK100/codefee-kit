import React, { FC, ReactNode } from 'react';
import { CodefeeTheme, ITheme } from 'common/Theme';
import { createGlobalStyle } from 'styled-components';
import { GlobalResetCss } from './AppContainer.style';

export interface AppContainerProps {
  children?: ReactNode;
  appTheme?: ITheme;
  requireCssReset?: boolean;
}

export const GlobalStyle = createGlobalStyle<AppContainerProps>`
  :root{
    ${({ appTheme }) => Object
    .keys(appTheme as ITheme)
    .map((key: keyof ITheme) => `${key}: ${(appTheme as ITheme)[key]};`)};
  }

  ${({ requireCssReset }) => (requireCssReset ? GlobalResetCss : null)}
`;

const AppContainer: FC<AppContainerProps> = ({
  children,
  appTheme,
  requireCssReset,
}: AppContainerProps) => (
  <>
    <GlobalStyle
      appTheme={appTheme}
      requireCssReset={requireCssReset}
    />
    {children}
  </>
);

AppContainer.displayName = 'AppContainer';
AppContainer.defaultProps = {
  children: undefined,
  appTheme: CodefeeTheme,
  requireCssReset: true,
};

export default AppContainer;
