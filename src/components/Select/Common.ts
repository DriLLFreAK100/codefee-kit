import { ListObjectRequiredProps } from 'common/Interfaces';

export type SelectOptionType = {
  [key: string]: unknown;
} & ListObjectRequiredProps<number | string>;
