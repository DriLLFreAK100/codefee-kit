import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { FC } from 'react';
import { Gutter } from 'common';
import { TypographyElementProps } from '../interface';

const BaseStyle = ({
  gutterBottom,
  subtle,
}: TypographyElementProps) : FlattenSimpleInterpolation => css`
  ${gutterBottom ? `
    margin-bottom: ${rem(gutterBottom)};
  ` : ''}
  
  ${subtle ? `
    color: gray;
    font-style: italic;
    font-weight: 300;
  ` : ''}
`;

const BaseHeadingStyle = (
  props: TypographyElementProps,
  defaultGutterBottom: Gutter,
) : FlattenSimpleInterpolation => {
  const { gutterBottom } = props;

  return css`
    font-family: ${cvar('--font-family-primary')};
    font-weight: 600;
    ${BaseStyle({ ...props, gutterBottom: gutterBottom ?? defaultGutterBottom })}
  `;
};

export const withBaseStyle = (
  Component: FC<TypographyElementProps>,
):FC<TypographyElementProps> => styled(Component)<TypographyElementProps>`
  ${(props) => BaseStyle(props)};
`;

export const withHeadingStyle = (
  Component: FC<TypographyElementProps>,
  defaultGutterBottom: Gutter = 0,
):FC<TypographyElementProps> => styled(Component)<TypographyElementProps>`
  ${(props) => BaseHeadingStyle(props, defaultGutterBottom)};
`;
