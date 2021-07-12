import React, { FC, ReactNode } from 'react';
import { CodefeeTheme, ITheme } from 'common/Theme';
import { createGlobalStyle } from 'styled-components';
import './AppContainer.css';

export interface AppContainerProps {
  children?: ReactNode;
  appTheme: ITheme;
}

const GlobalStyle = createGlobalStyle<AppContainerProps>`
  :root{
    ${({ appTheme }) => Object
    .keys(appTheme)
    .map((key: keyof ITheme) => `${key}: ${appTheme[key]};`)};
  }
`;

const AppContainer: FC<AppContainerProps> = ({
  children,
  appTheme,
}: AppContainerProps) => (
  <>
    <GlobalStyle appTheme={appTheme} />
    {children}
  </>
);

AppContainer.displayName = 'AppContainer';
AppContainer.defaultProps = {
  children: undefined,
  appTheme: CodefeeTheme,
};

export default AppContainer;
