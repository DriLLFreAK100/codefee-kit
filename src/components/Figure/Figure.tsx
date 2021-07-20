import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Typography from 'components/Typography';
import { cvar, rem, gut } from 'utils';
import { Gutter } from 'common';

export interface FigureProps {
  caption?: ReactNode;
  gutter?: Gutter;
  children?: ReactNode;
}

const StyledFigure = styled.figure<FigureProps>`
  border-radius: ${cvar('--control-border-radius')};
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: ${({ gutter }) => gut(gutter as Gutter)};
  text-align: center;
`;

const StyledCaption = styled(Typography)`
  margin-top: ${rem(4)};
  font-style: italic;
`;

const Figure: FC<FigureProps> = (props: FigureProps) => {
  const {
    caption,
    children,
  } = props;

  return (
    <StyledFigure {...props}>
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
};

Figure.displayName = 'Figure';
Figure.defaultProps = {
  caption: undefined,
  gutter: 0,
  children: undefined,
};

export default Figure;
