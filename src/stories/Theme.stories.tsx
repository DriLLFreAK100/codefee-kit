import Button from 'components/Button';
import React from 'react';
import { AppContainer, AppContainerProps } from 'components/AppContainer';
import { ITheme } from 'common/Theme';
import { Meta, Story } from '@storybook/react';
import { overrideTheme } from 'utils/ThemeHelper/ThemeHelper';

export default {
  title: 'Foundation/Theme',
} as Meta;

const Template: Story<AppContainerProps> = (args) => {
  return (
    <AppContainer {...args}>
      <Button>Test Override</Button>
    </AppContainer>
  );
};

export const OverridePrimaryColor = Template.bind({});
OverridePrimaryColor.args = {
  appTheme: overrideTheme({
    '--color-primary': '#a2ffd2',
    '--color-primary-light': '#d6ffff',
    '--color-primary-dark': '#70cba1',
    '--color-primary-on': '#000000',
  }),
} as AppContainerProps;
