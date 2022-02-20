/* eslint-disable import/prefer-default-export */
import React, { FC } from 'react';
import { DayPeriod } from 'utils/DateHelper';
import IconButton, { IconButtonProps } from '../IconButton';

type TileIconProps = {
  dayPeriod: DayPeriod;
} & IconButtonProps;

export const DayTileIconButton: FC<TileIconProps> = ({
  children = null,
  ...passThrough
}) => (
  <IconButton
    variant="subtle"
    {...passThrough}
  >
    {children}
  </IconButton>
);

export const NavIconButton: FC = ({
  children = null,
  ...passThrough
}) => (
  <IconButton
    variant="subtle"
    {...passThrough}
  >
    {children}
  </IconButton>
);
