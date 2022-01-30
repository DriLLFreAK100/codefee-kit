import orderBy from 'lodash-es/orderBy';
import React, {
  forwardRef, ReactNode, TableHTMLAttributes, useRef, useState,
} from 'react';
import * as S from './Table.styled';
import {
  DataColumnDefinition, FooterColumnDefinition, getColumnFlexBasis, OrderByDirection,
} from './Common';
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type TableProps = {
  data: any[];
  colDefs: DataColumnDefinition[];
  footerDefs?: FooterColumnDefinition[];
  onClickHeader?: (colDef: DataColumnDefinition) => void;
  rowTemplate?: (colDef: DataColumnDefinition[], data: any, rowIndex: number) => ReactNode;
  headerRowTemplate?: (colDef: DataColumnDefinition[]) => ReactNode;
  footerRowTemplate?: (colDef: FooterColumnDefinition[]) => ReactNode;
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
    {colDefs.map((colDef) => {
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
    })}
  </S.Tr>
);

const defaultHeaderRowTemplate = (
  colDefs: DataColumnDefinition[],
  onClickHeader?: (colDef: DataColumnDefinition) => void,
): ReactNode => {
  const handleOnClickHeader = (colDef: DataColumnDefinition) => () => {
    onClickHeader?.(colDef);
  };

  return (
    <S.Tr segment="head">
      {colDefs.map((colDef) => {
        const {
          id, header, align, sortable,
        } = colDef;

        return (
          <S.Th
            key={id}
            style={{ flexBasis: getColumnFlexBasis(colDef, colDefs) }}
            align={align || 'left'}
            sortable={sortable}
            onClick={handleOnClickHeader(colDef)}
          >
            {header}
          </S.Th>
        );
      })}
    </S.Tr>
  );
};

const defaultFooterRowTemplate = (footerDefs: FooterColumnDefinition[]): ReactNode => (
  <S.Tr segment="foot">
    {footerDefs.map((footerDef) => {
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
    })}
  </S.Tr>
);

const Table = forwardRef<HTMLTableElement, TableProps>(
  (props: TableProps, ref) => {
    const {
      data,
      colDefs,
      footerDefs,
      rowTemplate,
      headerRowTemplate,
      footerRowTemplate,
      ...passThrough
    } = props;

    const [computedData, setComputedData] = useState<any[]>(data);
    const sortByKey = useRef<[string, OrderByDirection]>(['', 'asc']);

    const handleOnClickHeader = ({ field }: DataColumnDefinition) => {
      if (field) {
        const [key] = sortByKey.current;

        if (key === field) {
          const [, order] = sortByKey.current;
          sortByKey.current = order === 'asc' ? [field, 'desc'] : [field, 'asc'];
        } else {
          sortByKey.current = [field, 'asc'];
        }

        const [, order] = sortByKey.current;

        setComputedData(orderBy(
          computedData,
          (c) => c[field],
          order,
        ));
      }
    };

    const hasFooter = (footerDefs || []).length > 0;
    const makeBodyRow = rowTemplate ?? defaultBodyRowTemplate;
    const makeHeaderRow = headerRowTemplate ?? defaultHeaderRowTemplate;
    const makeFooterRow = footerRowTemplate ?? defaultFooterRowTemplate;

    return (
      <S.Table
        ref={ref}
        {...passThrough}
      >
        <S.THead>
          {makeHeaderRow(colDefs, handleOnClickHeader)}
        </S.THead>

        <S.TBody>
          {computedData.map((datum, index) => makeBodyRow(colDefs, datum, index))}
        </S.TBody>

        {hasFooter ? (
          <S.TFooter>
            {makeFooterRow(footerDefs as FooterColumnDefinition[])}
          </S.TFooter>
        ) : null}

      </S.Table>
    );
  },
);

Table.displayName = 'Table';
Table.defaultProps = {
  footerDefs: [],
  onClickHeader: undefined,
  rowTemplate: undefined,
  headerRowTemplate: undefined,
  footerRowTemplate: undefined,
};

export default Table;
