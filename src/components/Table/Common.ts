import orderBy from 'lodash-es/orderBy';
import { ListObjectRequiredProps } from 'common';
import { ReactNode } from 'react';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

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
  render?: (cellData: any, rowData: any) => ReactNode,
} & ColumnDefinition & ListObjectRequiredProps<number>;

export type FooterColumnDefinition = {
  value?: ReactNode;
} & ColumnDefinition & ListObjectRequiredProps<number>;

export type SortKey = [string, OrderByDirection];

export const defaultSortKey: SortKey = ['', 'asc'];

export const getColumnFlexBasis = (
  current: ColumnDefinition,
  colDefs: ColumnDefinition[],
): string => {
  const totalSize = colDefs.reduce((acc, curr) => acc + (curr.size || 1), 0);
  return `${((current.size || 1) / totalSize) * 100}%`;
};

export const trySortData = (
  data: any,
  colDef: DataColumnDefinition,
  sortKey: SortKey,
  onSort: (output: [updatedSortKey: SortKey, sortedData: any]) => void,
): void => {
  const { field, sortable } = colDef;
  const [sortField, sortDirection] = sortKey;
  let updatedSortKey = defaultSortKey;

  if (sortable && field) {
    if (sortField === field) {
      updatedSortKey = sortDirection === 'asc' ? [field, 'desc'] : defaultSortKey;
    } else {
      updatedSortKey = [field, 'asc'];
    }

    onSort([
      updatedSortKey,
      orderBy(
        data,
        (c) => c[field],
        updatedSortKey[1],
      ),
    ]);
  }
};
