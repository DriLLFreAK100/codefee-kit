import AppContainer from 'components/AppContainer';
import CommonHelper from 'utils/CommonHelper';
import Grid from 'components/Grid';
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Layout/Grid',
  component: Grid,
} as Meta;

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Sample = () => {
  return (
    <AppContainer>
      <Grid fullHeight>
        {
          sampleData.map((s) => {
            return (
              <Grid
                key={s}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{ background: CommonHelper.getRandomColor() }}
                xAlign="center"
                yAlign="center"
              >
                {s}
              </Grid>
            );
          })
        }
      </Grid>
    </AppContainer>
  );
};
