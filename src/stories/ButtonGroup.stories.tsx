import React, { useCallback, useEffect, useState } from 'react';
import ButtonGroup, { ButtonGroupButton, ButtonGroupProps } from 'components/ButtonGroup';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/ButtonGroup',
  component: ButtonGroup,
} as Meta<ButtonGroupProps>;

const Template: Story<ButtonGroupProps> = (args: ButtonGroupProps) => {
  const [buttonStates, setButtonStates] = useState(args.buttons);

  const handleOnButtonClick = useCallback((btn: ButtonGroupButton) => {
    action('onButtonClick')(btn);

    setButtonStates(buttonStates.map((b) => ({ ...b, selected: b.id === btn.id })));
  }, []);

  useEffect(() => {
    setButtonStates(args.buttons);
  }, [args.buttons]);

  return (
    <ButtonGroup
      {...args}
      buttons={buttonStates}
      onButtonClick={handleOnButtonClick}
    />
  )
};

export const Default = Template.bind({});
Default.args = {
  buttons: [
    { id: 1, content: 'Arabica' },
    { id: 2, content: 'Robusta' },
    { id: 3, content: 'Liberica' },
  ],
} as ButtonGroupProps;
