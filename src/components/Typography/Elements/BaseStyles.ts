import { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { Gutter } from 'common';
import { TypographyElementProps } from '../interface';

export const BaseStyle = (props: TypographyElementProps = {}) : FlattenSimpleInterpolation => {
  const {
    gutterBottom,
    subtle,
  } = props;

  return css`
    ${gutterBottom ? `
      margin-bottom: ${rem(gutterBottom)};
    ` : ''}
    
    ${subtle ? `
      color: gray;
      font-style: italic;
      font-weight: 300;
    ` : ''}
  `;
};

export const BaseHeadingStyle = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
) : FlattenSimpleInterpolation => {
  const { gutterBottom } = props;

  return css`
    font-family: ${cvar('--font-family-primary')};
    font-weight: 600;
    ${BaseStyle({ ...props, gutterBottom: gutterBottom ?? defaultGutterBottom })}
  `;
};
