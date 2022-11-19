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
  // Sort story by name
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
    <AppContainer>
      <Story />
    </AppContainer>
  ),
];
