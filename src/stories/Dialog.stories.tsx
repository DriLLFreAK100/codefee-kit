import React, { useEffect, useState } from 'react';
import Dialog, { DialogFooter, DialogHeader, DialogProps } from 'components/Dialog';
import { Meta, Story } from '@storybook/react';
import Button from 'components/Button';
import { Typography } from 'components/Typography';
import styles from './assets/styles/Dialog.module.scss';

export default {
  title: 'Modals/Dialog',
  component: Dialog,
} as Meta<DialogProps>;

const Template: Story<DialogProps> = (args: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => setIsOpen(args.isOpen), [args.isOpen]);

  return (
    <>
      <Button onClick={handleClickOpen}>OPEN</Button>
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <Typography>This is a dialog!</Typography>
} as DialogProps;

const WithSectionsTemplate: Story<DialogProps> = (args: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => setIsOpen(args.isOpen), [args.isOpen]);

  return (
    <>
      <Button onClick={handleClickOpen}>OPEN</Button>
      <Dialog
        {...args}
        isOpen={isOpen}
        className={styles['with-section']}
        onClose={handleClose}
      >
        <DialogHeader onClose={handleClose}>Dialog Title</DialogHeader>
        <main>
          <Typography gutterBottom={36}>Take a break, have a coffee!</Typography>
          <Typography>...</Typography>
          <Typography gutterBottom={12}>Maybe more coffee!</Typography>
        </main>

        <DialogFooter className={styles['with-section__footer']}>
          <Button onClick={handleClose} variant="subtle">Close</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const WithHeader = WithSectionsTemplate.bind({});