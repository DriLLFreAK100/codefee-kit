import React, { useEffect, useState } from 'react';
import Dialog, { DialogProps } from 'components/Dialog';
import { Meta, Story } from '@storybook/react';
import Button from 'components/Button';
import { Typography } from 'components/Typography';

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
