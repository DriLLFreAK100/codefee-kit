import React, { FC, ReactNode } from 'react';
import { CodefeeTheme, ITheme } from 'common/Theme';
import { ThemeProvider } from 'styled-components';

interface IAppContainer {
  children?: ReactNode;
  theme?: ITheme;
}

const AppContainer: FC<IAppContainer> = ({
  children,
  theme,
}: IAppContainer) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

AppContainer.defaultProps = {
  children: undefined,
  theme: CodefeeTheme,
};

export default AppContainer;
