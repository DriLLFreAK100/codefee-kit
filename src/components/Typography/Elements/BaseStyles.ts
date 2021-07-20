import styled, {
  css, FlattenSimpleInterpolation, StyledComponent,
} from 'styled-components';
import { cvar, rem } from 'utils';
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
  Component: StyledComponent<
  keyof JSX.IntrinsicElements,
  never,
  TypographyElementProps,
  never
  >,
):StyledComponent<
keyof JSX.IntrinsicElements,
never,
TypographyElementProps,
never
> => styled(Component)<TypographyElementProps>`
  ${(props) => BaseStyle(props)};
`;

export const withHeadingStyle = (
  Component: StyledComponent<
  keyof JSX.IntrinsicElements,
  never,
  TypographyElementProps,
  never
  >,
  defaultGutterBottom: Gutter = 0,
):StyledComponent<
keyof JSX.IntrinsicElements,
never,
TypographyElementProps,
never
> => styled(Component)<TypographyElementProps>`
  ${(props) => BaseHeadingStyle(props, defaultGutterBottom)};
`;
