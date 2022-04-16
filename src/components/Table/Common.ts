import orderBy from 'lodash-es/orderBy';
import { ListObjectRequiredProps } from 'common';
import { CSSProperties, ReactNode } from 'react';
import { rem } from 'utils/StyleHelper';
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
  /**
   * The size ratio of the column
   */
  size?: number;

  /**
   * The fixed width dp. This will supersede the `size` props
   */
  fixedSize?: number;

  /**
   * Alignment within the column (left, center, right)
   */
  align?: Alignment;
};

export type DataColumnDefinition = {
  header?: string;
  field?: string;
  disableSort?: boolean;
  render?: (cellData: any, rowData: any) => ReactNode,
} & ColumnDefinition & ListObjectRequiredProps<number>;

export type FooterColumnDefinition = {
  value?: ReactNode;
} & ColumnDefinition & ListObjectRequiredProps<number>;

export type SortKey = [string, OrderByDirection];

export const defaultSortKey: SortKey = ['', 'asc'];

export const getColumnStyle = (
  current: ColumnDefinition,
  colDefs: ColumnDefinition[],
): CSSProperties => {
  if (current.fixedSize) {
    return {
      flexGrow: 0,
      flexBasis: rem(current.fixedSize),
    };
  }

  const totalSize = colDefs.reduce((acc, curr) => acc + (curr.size || 1), 0);

  return {
    flexBasis: `${((current.size || 1) / totalSize) * 100}%`,
  };
};

export const trySortData = (
  data: any,
  colDef: DataColumnDefinition,
  sortKey: SortKey,
  onSort: (output: [updatedSortKey: SortKey, sortedData: any]) => void,
): void => {
  const { field, disableSort } = colDef;
  const [sortField, sortDirection] = sortKey;
  let updatedSortKey = defaultSortKey;

  if (!disableSort && field) {
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

export const getContentTitle = (node: ReactNode): string | undefined => {
  if (['number', 'string'].includes(typeof node)) {
    return node as string;
  }
  return undefined;
};
