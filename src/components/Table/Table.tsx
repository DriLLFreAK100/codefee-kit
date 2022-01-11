import React, { forwardRef, ReactNode, TableHTMLAttributes } from 'react';
import * as S from './Table.styled';
import { ColumnDefinition, getColumnFlexBasis } from './Common';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type TableProps = {
  data: any[];
  colDefs: ColumnDefinition[];
  rowTemplate?: (colDef: ColumnDefinition[], data: any) => ReactNode;
} & TableHTMLAttributes<HTMLTableElement>;

const defaultRowTemplate = (colDefs: ColumnDefinition[], data: any): ReactNode => (
  <S.Tr>
    {
      colDefs.map((colDef) => {
        const { id, field, align } = colDef;

        return (
          <S.Td
            key={id}
            style={{ flexBasis: getColumnFlexBasis(colDef, colDefs) }}
            align={align || 'left'}
          >
            {data[field || '']}
          </S.Td>
        );
      })
    }
  </S.Tr>
);

const Table = forwardRef<HTMLTableElement, TableProps>(
  (props: TableProps, ref) => {
    const {
      data,
      colDefs,
      rowTemplate,
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
              colDefs.map((colDef) => {
                const { id, header, align } = colDef;
                return (
                  <S.Th
                    key={id}
                    style={{ flexBasis: getColumnFlexBasis(colDef, colDefs) }}
                    align={align || 'left'}
                  >
                    {header}
                  </S.Th>
                );
              })
            }
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {
            data.map((datum) => {
              const template = rowTemplate ?? defaultRowTemplate;
              return template(colDefs, datum);
            })
          }
        </S.Tbody>
      </S.Table>
    );
  },
);

Table.displayName = 'Table';
Table.defaultProps = {
  rowTemplate: undefined,
};

export default Table;
