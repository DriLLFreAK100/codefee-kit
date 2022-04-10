import React, { useCallback, useEffect, useState } from 'react';
import ConfirmDialog, { ConfirmDialogProps } from 'components/ConfirmDialog';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import Button from 'components/Button';

export default {
  title: 'Modals/ConfirmDialog',
  component: ConfirmDialog,
} as Meta<ConfirmDialogProps>;

const Template: Story<ConfirmDialogProps> = (args: ConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);

  const handleClose = useCallback(() => {
    action('onClose')();
    setIsOpen(false);
  }, []);

  const handleConfirm = useCallback(() => {
    action('onConfirm')();
    setIsOpen(false);
  }, []);

  const handleCancel = useCallback(() => {
    action('onCancel')();
    setIsOpen(false);
  }, []);

  useEffect(() => setIsOpen(args.isOpen), [args.isOpen]);

  return (
    <>
      <Button onClick={handleClickOpen}>OPEN</Button>
      <ConfirmDialog
        {...args}
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onClose={handleClose}
      >
        {args.children}
      </ConfirmDialog>
    </>
  );
};

const baseProps = {
  isOpen: true,
} as ConfirmDialogProps;

export const Default = Template.bind({});
Default.args = {
  ...baseProps,
  children: 'Some confirmation text...',
} as ConfirmDialogProps;
