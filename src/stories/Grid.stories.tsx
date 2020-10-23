import React from 'react';
import Grid, { IGrid } from 'components/Grid';
import { Meta, Story } from '@storybook/react/types-6-0';
import CommonHelper from 'utils/CommonHelper';

export default {
  title: 'Layout/Grid',
  component: Grid,
} as Meta;

const Template: Story<IGrid> = (args) => <Grid {...args} />;

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Sample = Template.bind({});
Sample.args = {
  fullHeight: true,
  children: () => {
    return (
      <>
        {
          sampleData.map((s) => {
            return (
              <Grid
                key={s}
                xs={6}
                lg={4}
                xl={3}
                style={{ background: CommonHelper.getRandomColor() }}
                xAlign="center"
                yAlign="center"
              >
                {s}
              </Grid>
            );
          })
        }
      </>
    );
  },
} as IGrid;
