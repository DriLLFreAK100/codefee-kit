import React from 'react';
import Grid, { IGrid } from 'components/Grid';
import { Meta, Story } from '@storybook/react/types-6-0';
import CommonHelper from 'utils/CommonHelper';

export default {
  title: 'Layout/Grid',
} as Meta;

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const Sample: Story<IGrid> = () => {
  return (
    <Grid fullHeight>
      {sampleData.map((s) => {
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
      })}
    </Grid>
  );
};
