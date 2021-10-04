import styled, { css } from 'styled-components';
import { CaptionStyle } from 'components/Typography';
import { cvar, rem, gut } from 'utils';
import { Gutter } from 'common';

export const FigureCss = css<{ gutter?: Gutter }>`
  border-radius: ${cvar('--control-border-radius')};
  overflow: hidden;
  margin: 0 auto;
  margin-top: ${({ gutter }) => gut(gutter as Gutter ?? 20)};
  margin-bottom: ${({ gutter }) => gut(gutter as Gutter ?? 20)};
  text-align: center;
  width: 100%;
`;

export const CaptionCss = css`
  ${CaptionStyle()}
  margin: ${rem(4)} 0 ${rem(12)};
  font-style: italic;
`;

export const Figure = styled.figure<{ gutter?: Gutter }>`${FigureCss}`;

export const Caption = styled.figcaption`${CaptionCss}`;
