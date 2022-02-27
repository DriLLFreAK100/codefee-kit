/* eslint-disable import/prefer-default-export */
import { ReactNode } from 'react';

export const switchComponents = <TVariant extends string>(
  variant: TVariant,
  components: { [key in TVariant]: ReactNode },
): ReactNode => components[variant];
