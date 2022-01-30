import { ListObjectRequiredProps } from 'common';
import { ReactNode } from 'react';

export type Alignment = 'left' | 'right' | 'center';

export type TableSegment = 'head' | 'body' | 'foot';

export type OrderByDirection = 'asc' | 'desc';

export const FlexAlignmentMap: { [key in Alignment]: string } = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export type ColumnDefinition = {
  size?: number;
  align?: Alignment;
};

export type DataColumnDefinition = {
  header?: string;
  field?: string;
  sortable?: boolean;
  formatter?: (datum: unknown) => ReactNode;
} & ColumnDefinition & ListObjectRequiredProps<number>;

export type FooterColumnDefinition = {
  value?: ReactNode;
} & ColumnDefinition & ListObjectRequiredProps<number>;

export const getColumnFlexBasis = (
  current: ColumnDefinition,
  colDefs: ColumnDefinition[],
): string => {
  const totalSize = colDefs.reduce((acc, curr) => acc + (curr.size || 1), 0);
  return `${((current.size || 1) / totalSize) * 100}%`;
};
