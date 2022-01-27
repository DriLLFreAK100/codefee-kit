import React, { forwardRef, ReactNode, TableHTMLAttributes } from 'react';
import * as S from './Table.styled';
import { DataColumnDefinition, FooterColumnDefinition, getColumnFlexBasis } from './Common';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type TableProps = {
  data: any[];
  colDefs: DataColumnDefinition[];
  footerDefs?: FooterColumnDefinition[];
  rowTemplate?: (colDef: DataColumnDefinition[], data: any, rowIndex: number) => ReactNode;
} & TableHTMLAttributes<HTMLTableElement>;

const defaultBodyRowTemplate = (
  colDefs: DataColumnDefinition[],
  data: any,
  rowIndex: number,
): ReactNode => (
  <S.Tr
    key={rowIndex}
    segment="body"
  >
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

const defaultFooterRowTemplate = (footerDefs: FooterColumnDefinition[]): ReactNode => (
  <S.Tr segment="foot">
    {
      footerDefs.map((footerDef) => {
        const { id, align, value } = footerDef;
        return (
          <S.Td
            key={id}
            style={{ flexBasis: getColumnFlexBasis(footerDef, footerDefs) }}
            align={align || 'left'}
          >
            {value}
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
      footerDefs,
      rowTemplate,
      ...passThrough
    } = props;

    const hasFooter = (footerDefs || []).length > 0;

    return (
      <S.Table
        ref={ref}
        {...passThrough}
      >
        <S.THead>
          <S.Tr segment="head">
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
        </S.THead>

        <S.TBody>
          {
            data.map((datum, index) => {
              const template = rowTemplate ?? defaultBodyRowTemplate;
              return template(colDefs, datum, index);
            })
          }
        </S.TBody>

        {
          hasFooter ? (
            <S.TFooter>
              {defaultFooterRowTemplate(footerDefs as FooterColumnDefinition[])}
            </S.TFooter>
          ) : null
        }

      </S.Table>
    );
  },
);

Table.displayName = 'Table';
Table.defaultProps = {
  rowTemplate: undefined,
  footerDefs: [],
};

export default Table;
