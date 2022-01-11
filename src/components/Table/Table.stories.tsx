import React from 'react';
import Table, { TableProps } from 'components/Table';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Controls/Table',
  component: Table,
} as Meta<TableProps>;

const Template: Story<TableProps> = (args: TableProps) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { id: 1, name: 'Arabica', details: 'Known for its cup excellence' },
    { id: 2, name: 'Robusta', details: "Known to taste slightly 'burnt'" },
    { id: 3, name: 'Liberica', details: 'It is favoured for its smooth aftertaste and lingering taste of rich dark chocolate' },
  ],
  colDefs: [
    {
      id: 1, header: 'ID', field: 'id', size: 1, align: 'left',
    },
    {
      id: 2, header: 'Name', field: 'name', size: 2, align: 'center',
    },
    {
      id: 3, header: 'Details', field: 'details', size: 7, align: 'right',
    },
  ],
} as TableProps;
