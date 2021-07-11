import React, { FC, ReactNode } from 'react';
import { CodefeeTheme, ITheme } from 'common/Theme';
import { createGlobalStyle } from 'styled-components';
import './AppContainer.css';

export interface AppContainerProps {
  children?: ReactNode;
  appTheme?: ITheme;
}

const GlobalStyle = createGlobalStyle`
  :root{
    ${({ appTheme }: any) => Object
    .keys(appTheme)
    .map((key: keyof ITheme) => {
      return `${key}: ${appTheme[key]};`;
    })};
  }
`;

const AppContainer: FC<AppContainerProps> = ({
  children,
  appTheme,
}: AppContainerProps) => {
  return (
    <>
      <GlobalStyle appTheme={appTheme as ITheme} />
      {children}
    </>
  );
};

AppContainer.displayName = 'AppContainer';
AppContainer.defaultProps = {
  children: undefined,
  appTheme: CodefeeTheme,
};

export default AppContainer;
