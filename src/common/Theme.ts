/* eslint-disable import/prefer-default-export */
export interface ITheme {
  '--color-primary': string;
  '--color-primary-light': string;
  '--color-primary-dark': string;
  '--color-primary-on': string;
  '--color-secondary': string;
  '--color-secondary-light': string;
  '--color-secondary-dark': string;
  '--color-secondary-on': string;
  '--color-info': string;
  '--color-info-light': string;
  '--color-info-dark': string;
  '--color-info-on': string;
  '--color-success': string;
  '--color-success-light': string;
  '--color-success-dark': string;
  '--color-success-on': string;
  '--color-warning': string;
  '--color-warning-light': string;
  '--color-warning-dark': string;
  '--color-warning-on': string;
  '--color-error': string;
  '--color-error-light': string;
  '--color-error-dark': string;
  '--color-error-on': string;
  '--font-family-primary': string;
  '--font-family-secondary': string;
  '--transition-hover': string;
  '--transition-toggle': string;
  '--control-border-radius': string;
  '--control-height': string;
}

export const CodefeeTheme: ITheme = {
  '--color-primary': '#00838f',
  '--color-primary-light': '#4fb3bf',
  '--color-primary-dark': '#005662',
  '--color-primary-on': '#ffffff',
  '--color-secondary': '#ffc107',
  '--color-secondary-light': '#fff350',
  '--color-secondary-dark': '#c79100',
  '--color-secondary-on': '#000000',
  '--color-info': '#0074bd',
  '--color-info-light': '#58a2ef',
  '--color-info-dark': '#00498b',
  '--color-info-on': '#ffffff',
  '--color-success': '#28a745',
  '--color-success-light': '#64da73',
  '--color-success-dark': '#007717',
  '--color-success-on': '#ffffff',
  '--color-warning': '#fb8c00',
  '--color-warning-light': '#ffbd45',
  '--color-warning-dark': '#c25e00',
  '--color-warning-on': '#ffffff',
  '--color-error': '#b00020',
  '--color-error-light': '#e94948',
  '--color-error-dark': '#790000',
  '--color-error-on': '#ffffff',
  '--font-family-primary': 'Segoe UI, sans-serif',
  '--font-family-secondary': 'Open Sans, sans-serif',
  '--transition-hover': '0.1s',
  '--transition-toggle': '0.3s',
  '--control-border-radius': '0.25rem',
  '--control-height': '3rem',
};
