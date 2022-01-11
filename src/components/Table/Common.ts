import { ListObjectRequiredProps } from 'common';

export type Alignment = 'left' | 'right' | 'center';

export const FlexAlignmentMap: { [key in Alignment]: string } = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export type ColumnDefinition = {
  header?: string;
  field?: string;
  size?: number;
  align?: Alignment;
} & ListObjectRequiredProps<number>;

export const getColumnFlexBasis = (
  current: ColumnDefinition,
  colDefs: ColumnDefinition[],
): string => {
  const totalSize = colDefs.reduce((acc, curr) => acc + (curr.size || 1), 0);
  return `${((current.size || 1) / totalSize) * 100}%`;
};
