import React, { forwardRef, HtmlHTMLAttributes } from 'react';
import * as S from './DialogFooter.styled';

export type DialogFooterProps = HtmlHTMLAttributes<HTMLDivElement>;

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  (props: DialogFooterProps, ref) => {
    const {
      children,
      ...passThrough
    } = props;

    return (
      <S.DialogFooter
        ref={ref}
        {...passThrough}
      >
        {children}
      </S.DialogFooter>
    );
  },
);

DialogFooter.displayName = 'DialogFooter';

export default DialogFooter;
