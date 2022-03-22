import React, { FC, MouseEvent } from 'react';
import { DayPeriod } from 'utils/DateHelper';
import { IconButton, IconButtonProps } from '../IconButton';

export type DateInfoLevel = 'year' | 'month' | 'day';

type TileIconButtonProps = {
  isActive: boolean;
} & IconButtonProps;

export const TileIconButton: FC<TileIconButtonProps> = ({
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

type DayTileIconButtonProps = {
  dayPeriod: DayPeriod;
} & TileIconButtonProps;

export const DayTileIconButton: FC<DayTileIconButtonProps> = ({
  ...passThrough
}) => <TileIconButton {...passThrough} />;

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

export const switchLevel = <T extends unknown>(
  level: DateInfoLevel,
  dayFunc?: () => T,
  monthFunc?: () => T,
  yearFunc?: () => T,
  defaultFunc?: () => T,
): T | undefined => {
  switch (level) {
    case 'day':
      return dayFunc?.();
    case 'month':
      return monthFunc?.();
    case 'year':
      return yearFunc?.();
    default:
      return defaultFunc?.();
  }
};

export const withStopPropagation = (
  func: () => void,
) => (e: MouseEvent<HTMLButtonElement>): void => {
  e.nativeEvent.stopImmediatePropagation();
  func();
};
