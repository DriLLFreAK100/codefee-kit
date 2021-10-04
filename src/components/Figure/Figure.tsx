import React, { forwardRef, ReactNode, HtmlHTMLAttributes } from 'react';
import { Gutter } from 'common';
import * as S from './Figure.style';

export interface FigureProps extends HtmlHTMLAttributes<HTMLElement> {
  caption?: ReactNode;
  gutter?: Gutter;
  children?: ReactNode;
}

const Figure = forwardRef<HTMLElement, FigureProps>(
  (props: FigureProps, ref) => {
    const {
      caption,
      children,
    } = props;

    return (
      <S.Figure ref={ref} {...props}>
        {children}
        {
          caption && (
            <S.Caption>
              {caption}
            </S.Caption>
          )
        }
      </S.Figure>
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
