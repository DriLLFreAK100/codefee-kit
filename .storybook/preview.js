import React from 'react';
import { AppContainer } from '../src/components/AppContainer';

export const parameters = {
  layout: 'padded',
  backgrounds: {
    grid: {
      disable: false,
      enable: true,
      cellSize: 4,
      opacity: 0.5,
      cellAmount: 5,
    },
  },
}

export const decorators = [
  (Story) => (
    <AppContainer>
      <Story />
    </AppContainer>
  ),
];