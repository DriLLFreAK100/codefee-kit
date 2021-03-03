import React, { FC, ReactNode } from 'react';
import { CodefeeTheme, ITheme } from 'common/Theme';
import { createGlobalStyle } from 'styled-components';

interface IAppContainer {
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

const AppContainer: FC<IAppContainer> = ({
  children,
  appTheme,
}: IAppContainer) => {
  return (
    <>
      <GlobalStyle appTheme={appTheme as ITheme} />
      {children}
    </>
  );
};

AppContainer.defaultProps = {
  children: undefined,
  appTheme: CodefeeTheme,
};

export default AppContainer;
export type { IAppContainer };
