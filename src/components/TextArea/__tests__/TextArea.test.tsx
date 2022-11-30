import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextArea from '../TextArea';

describe('TextArea', () => {
  test('should be able to render', () => {
    render(<TextArea />);
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});
