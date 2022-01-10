import { ListObjectRequiredProps } from 'common';

export type ColumnDefinition = {
  header?: string;
  field?: string;
  size?: number;
} & ListObjectRequiredProps<number>;
