/* eslint-disable import/prefer-default-export */
export interface ITheme {
  color: { [key: string]: IColor };
  fontFamily: IFontFamily;
}

export interface IColor {
  default: string;
  light: string;
  dark: string;
  on: string;
}

export interface IFontFamily {
  primary: string;
  secondary: string;
}

export const CodefeeTheme: ITheme = {
  color: {
    primary: {
      default: '#00838f',
      light: '#4fb3bf',
      dark: '#005662',
      on: '#ffffff',
    },
    secondary: {
      default: '#ffc107',
      light: '#fff350',
      dark: '#c79100',
      on: '#000000',
    },
    info: {
      default: '#0074bd',
      light: '#58a2ef',
      dark: '#00498b',
      on: '#ffffff',
    },
    success: {
      default: '#28a745',
      light: '#64da73',
      dark: '#007717',
      on: '#ffffff',
    },
    warning: {
      default: '#fb8c00',
      light: '#ffbd45',
      dark: '#c25e00',
      on: '#ffffff',
    },
    error: {
      default: '#b00020',
      light: '#e94948',
      dark: '#790000',
      on: '#ffffff',
    },
  },
  fontFamily: {
    primary: 'Roboto, sans-serif',
    secondary: 'Segoe UI, sans-serif',
  },
};
