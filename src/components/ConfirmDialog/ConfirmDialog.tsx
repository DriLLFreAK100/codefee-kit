import { DialogFooter, DialogHeader, DialogProps } from 'components/Dialog';
import React, { forwardRef, ReactNode, useCallback } from 'react';
import * as S from './ConfirmDialog.styled';

export type ConfirmDialogProps = {
  confirmationTitle?: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
} & DialogProps;

const ConfirmDialog = forwardRef<HTMLDivElement, ConfirmDialogProps>(
  (props: ConfirmDialogProps, ref) => {
    const {
      confirmationTitle,
      confirmLabel,
      cancelLabel,
      onConfirm,
      onCancel,
      children,
      ...passThrough
    } = props;

    const handleConfirm = useCallback(() => onConfirm?.(), [onConfirm]);

    const handleCancel = useCallback(() => onCancel?.(), [onCancel]);

    return (
      <S.ConfirmDialog
        ref={ref}
        {...passThrough}
      >
        <DialogHeader>
          {confirmationTitle}
        </DialogHeader>

        <S.Content>
          {children}
        </S.Content>

        <DialogFooter>
          <S.Button onClick={handleConfirm}>
            {confirmLabel}
          </S.Button>

          <S.Button
            variant="subtle"
            onClick={handleCancel}
          >
            {cancelLabel}
          </S.Button>
        </DialogFooter>
      </S.ConfirmDialog>
    );
  },
);

ConfirmDialog.displayName = 'ConfirmDialog';
ConfirmDialog.defaultProps = {
  confirmationTitle: 'Confirmation',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  onConfirm: undefined,
  onCancel: undefined,
};

export default ConfirmDialog;
