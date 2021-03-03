import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#00838f',
  colorSecondary: '#ffc107',

  // UI
  appBg: 'white',
  appContentBg: '#fafafa',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Roboto, sans-serif',

  // Text colors
  textColor: 'black',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#fff350',
  barBg: '#00838f',

  brandTitle: 'Codefee-Kit Storybook',
  brandUrl: 'https://github.com/DriLLFreAK100/codefee-kit',
});