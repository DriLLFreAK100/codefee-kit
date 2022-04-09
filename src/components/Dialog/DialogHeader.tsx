import { IconButton } from 'components/IconButton';
import { Times } from 'components/Icons';
import React, { forwardRef, HtmlHTMLAttributes } from 'react';
import * as S from './DialogHeader.styled';

export type DialogHeaderProps = {
  onClose?: () => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  (props: DialogHeaderProps, ref) => {
    const {
      onClose,
      children,
      ...passThrough
    } = props;

    const handleOnClose = () => onClose?.();

    return (
      <S.DialogHeader
        ref={ref}
        {...passThrough}
      >
        <S.TitleSection type="h6">
          {children}
        </S.TitleSection>

        <IconButton variant="subtle" onClick={handleOnClose}>
          <Times />
        </IconButton>
      </S.DialogHeader>
    );
  },
);

DialogHeader.displayName = 'DialogHeader';
DialogHeader.defaultProps = {
  onClose: undefined,
};

export default DialogHeader;
