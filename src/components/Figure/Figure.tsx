import React, { forwardRef, ReactNode, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';
import Typography from 'components/Typography';
import { cvar, rem, gut } from 'utils';
import { Gutter } from 'common';

export interface FigureProps extends HtmlHTMLAttributes<HTMLElement> {
  caption?: ReactNode;
  gutter?: Gutter;
  children?: ReactNode;
}

const StyledFigure = styled.figure<FigureProps>`
  border-radius: ${cvar('--control-border-radius')};
  overflow: hidden;
  margin: 0 auto;
  margin-top: ${({ gutter }) => gut(gutter as Gutter ?? 20)};
  margin-bottom: ${({ gutter }) => gut(gutter as Gutter ?? 20)};
  text-align: center;
  width: 100%;
`;

const StyledCaption = styled(Typography)`
  margin: ${rem(4)} 0 ${rem(12)};
  font-style: italic;
`;

const Figure = forwardRef<HTMLElement, FigureProps>(
  (props: FigureProps, ref) => {
    const {
      caption,
      children,
    } = props;

    return (
      <StyledFigure ref={ref} {...props}>
        {children}
        {
          caption && (
            <StyledCaption type="caption">
              {caption}
            </StyledCaption>
          )
        }
      </StyledFigure>
    );
  },
);

Figure.displayName = 'Figure';
Figure.defaultProps = {
  caption: undefined,
  gutter: undefined,
  children: undefined,
};

export default Figure;
