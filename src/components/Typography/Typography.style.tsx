import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { cvar, rem } from 'utils';
import { Gutter } from 'common';
import { TypographyElementProps } from './Common';

const BaseCss = (props: TypographyElementProps = {}): FlattenSimpleInterpolation => {
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

const BaseHeadingCss = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => {
  const { gutterBottom } = props;

  return css`
    font-family: ${cvar('--font-family-primary')};
    font-weight: 600;
    ${BaseCss({ ...props, gutterBottom: gutterBottom ?? defaultGutterBottom })}
  `;
};

const Body1Css = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(20)};
  ${BaseCss(props)};
`;

const Body2Css = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(14)};
  font-weight: normal;
  letter-spacing: ${rem(0.25)};
  line-height: ${rem(16)};
  ${BaseCss(props)};
`;

export const ButtonCss = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-weight: 500;
  font-size: ${rem(14)};
  letter-spacing: ${rem(1.25)};
  text-transform: uppercase;
  line-height: ${rem(16)};
  ${BaseCss(props)};
`;

const CaptionCss = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(14)};
  font-weight: normal;
  letter-spacing: ${rem(0.4)};
  line-height: ${rem(16)};
  ${BaseCss(props)};
`;

const H1Css = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(52)};
  line-height: ${rem(68)};
  ${BaseHeadingCss(props, defaultGutterBottom)};
`;

const H2Css = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(40)};
  line-height: ${rem(52)};
  ${BaseHeadingCss(props, defaultGutterBottom)};
`;

const H3Css = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(32)};
  line-height: ${rem(44)};
  ${BaseHeadingCss(props, defaultGutterBottom)};
`;

const H4Css = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(28)};
  line-height: ${rem(40)};
  ${BaseHeadingCss(props, defaultGutterBottom)};
`;

const H5Css = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(24)};
  line-height: ${rem(36)};
  ${BaseHeadingCss(props, defaultGutterBottom)};
`;

const H6Css = (
  props: TypographyElementProps = {},
  defaultGutterBottom: Gutter = 0,
): FlattenSimpleInterpolation => css`
  font-size: ${rem(20)};
  line-height: ${rem(32)};
  ${BaseHeadingCss(props, defaultGutterBottom)};
`;

const ParagraphCss = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  margin-bottom: ${rem(20)};
  ${BaseCss(props)};
`;

const BlockquoteCss = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(24)};
  font-style: italic;
  font-weight: 300;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(36)};
  ${BaseCss(props)};
`;

const Subtitle1Css = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.15)};
  line-height: ${rem(16)};
  ${BaseCss(props)};
`;

const Subtitle2Css = (props?: TypographyElementProps): FlattenSimpleInterpolation => css`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(14)};
  font-weight: 500;
  letter-spacing: ${rem(0.1)};
  line-height: ${rem(16)};
  ${BaseCss(props)};
`;

export const Body1 = styled.p<TypographyElementProps>`${(props) => Body1Css(props)}`;

export const Body2 = styled.p<TypographyElementProps>`${(props) => Body2Css(props)}`;

export const Button = styled.span<TypographyElementProps>`${(props) => ButtonCss(props)}`;

export const Caption = styled.figcaption<TypographyElementProps>`${(props) => CaptionCss(props)}`;

export const H1 = styled.h1<TypographyElementProps>`${(props) => H1Css(props, 28)}`;

export const H2 = styled.h2<TypographyElementProps>`${(props) => H2Css(props, 24)}`;

export const H3 = styled.h3<TypographyElementProps>`${(props) => H3Css(props, 16)}`;

export const H4 = styled.h4<TypographyElementProps>`${(props) => H4Css(props, 12)}`;

export const H5 = styled.h5<TypographyElementProps>`${(props) => H5Css(props)}`;

export const H6 = styled.h6<TypographyElementProps>`${(props) => H6Css(props)}`;

export const Paragraph = styled.p<TypographyElementProps>`${(props) => ParagraphCss(props)}`;

export const Blockquote = styled.p<TypographyElementProps>`${(props) => BlockquoteCss(props)}`;

export const Subtitle1 = styled.h6<TypographyElementProps>`${(props) => Subtitle1Css(props)}`;

export const Subtitle2 = styled.h6<TypographyElementProps>`${(props) => Subtitle2Css(props)}`;

export default {
  Body1Css,
  Body2Css,
  ButtonCss,
  CaptionCss,
  H1Css,
  H2Css,
  H3Css,
  H4Css,
  H5Css,
  H6Css,
  ParagraphCss,
  BlockquoteCss,
  Subtitle1Css,
  Subtitle2Css,
};
