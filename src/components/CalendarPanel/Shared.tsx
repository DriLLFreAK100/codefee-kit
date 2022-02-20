/* eslint-disable import/prefer-default-export */
import React, { FC } from 'react';
import { DayPeriod } from 'utils/DateHelper';
import IconButton, { IconButtonProps } from '../IconButton';

type DayTileIconProps = {
  isActive: boolean;
  dayPeriod: DayPeriod;
} & IconButtonProps;

export const DayTileIconButton: FC<DayTileIconProps> = ({
  isActive = false,
  children = null,
  ...passThrough
}) => (
  <IconButton
    variant={isActive ? 'primary' : 'subtle'}
    {...passThrough}
  >
    {children}
  </IconButton>
);

export const NavIconButton: FC<IconButtonProps> = ({
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
