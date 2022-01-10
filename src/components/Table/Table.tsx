/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, TableHTMLAttributes } from 'react';
import * as S from './Table.styled';
import { ColumnDefinition } from './Common';

export type TableProps = {
  data: any[];
  colDef: ColumnDefinition[];
} & TableHTMLAttributes<HTMLTableElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(
  (props: TableProps, ref) => {
    const {
      data,
      colDef,
      ...passThrough
    } = props;

    return (
      <S.Table
        ref={ref}
        {...passThrough}
      >
        <S.Thead>
          <S.Tr>
            {
              colDef.map(({
                id, header,
              }) => (
                <S.Th key={id}>{header}</S.Th>
              ))
            }
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {
            data.map((d, index) => (
              <S.Tr key={index}>
                {
                  colDef.map(({ id, field }) => (
                    <S.Td key={id}>{d[field || '']}</S.Td>
                  ))
                }
              </S.Tr>
            ))
          }
        </S.Tbody>
      </S.Table>
    );
  },
);

Table.displayName = 'Table';
Table.defaultProps = {
};

export default Table;
