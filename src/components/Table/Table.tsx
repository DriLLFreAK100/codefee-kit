import orderBy from 'lodash-es/orderBy';
import React, {
  forwardRef, ReactNode, TableHTMLAttributes, useCallback, useMemo, useRef, useState,
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
  onClickRow?: (data: any) => void;
  rowTemplate?: (
    colDef: DataColumnDefinition[],
    data: any,
    rowIndex: number,
    isClickable: boolean,
    onClickRow?: (data: any) => void,
  ) => ReactNode;
  headerRowTemplate?: (colDef: DataColumnDefinition[]) => ReactNode;
  footerRowTemplate?: (colDef: FooterColumnDefinition[]) => ReactNode;
} & TableHTMLAttributes<HTMLTableElement>;

const defaultBodyRowTemplate = (
  colDefs: DataColumnDefinition[],
  data: any,
  rowIndex: number,
  isClickable: boolean,
  onClickRow?: (data: any) => void,
): ReactNode => {
  const handleOnClickRow = (): void => {
    onClickRow?.(data);
  };

  return (
    <S.Tr
      key={rowIndex}
      segment="body"
      isClickable={isClickable}
      onClick={handleOnClickRow}
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
};

const defaultHeaderRowTemplate = (
  colDefs: DataColumnDefinition[],
  sortState: [string, OrderByDirection],
  onClickHeader?: (colDef: DataColumnDefinition) => void,
): ReactNode => {
  const handleOnClickHeader = (colDef: DataColumnDefinition) => () => {
    onClickHeader?.(colDef);
  };

  const [sortKey, sortDirection] = sortState;

  return (
    <S.Tr segment="head">
      {colDefs.map((colDef) => {
        const {
          id, header, field, align, sortable,
        } = colDef;

        const isSortActive = sortKey === field;

        return (
          <S.Th
            key={id}
            style={{ flexBasis: getColumnFlexBasis(colDef, colDefs) }}
            align={align || 'left'}
            sortable={sortable}
            isSortActive={isSortActive}
            onClick={handleOnClickHeader(colDef)}
          >
            {header}
            {isSortActive ? <S.SortIcon direction={sortDirection} /> : null}
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
      onClickHeader,
      onClickRow,
      rowTemplate,
      headerRowTemplate,
      footerRowTemplate,
      ...passThrough
    } = props;

    const [computedData, setComputedData] = useState<any[]>(data);
    const sortByKey = useRef<[string, OrderByDirection]>(['', 'asc']);

    const handleOnClickHeader = useCallback((colDef: DataColumnDefinition) => {
      const { field, sortable } = colDef;

      if (sortable && field) {
        if (sortByKey.current[0] === field) {
          sortByKey.current = sortByKey.current[1] === 'asc' ? [field, 'desc'] : ['', 'asc'];
        } else {
          sortByKey.current = [field, 'asc'];
        }

        setComputedData(orderBy(
          computedData,
          (c) => c[field],
          sortByKey.current[1],
        ));

        onClickHeader?.(colDef);
      }
    }, [computedData, onClickHeader]);

    const handleOnClickRow = useCallback((rowData: any) => {
      onClickRow?.(rowData);
    }, [onClickRow]);

    const hasFooter = (footerDefs || []).length > 0;
    const makeBodyRow = rowTemplate ?? defaultBodyRowTemplate;
    const makeHeaderRow = headerRowTemplate ?? defaultHeaderRowTemplate;
    const makeFooterRow = footerRowTemplate ?? defaultFooterRowTemplate;

    const headerRow = useMemo(
      () => makeHeaderRow(colDefs, sortByKey.current, handleOnClickHeader),
      [colDefs, handleOnClickHeader, makeHeaderRow],
    );

    const bodyRows = useMemo(
      () => computedData.map((datum, index) => makeBodyRow(
        colDefs,
        datum,
        index,
        !!onClickRow,
        handleOnClickRow,
      )),
      [computedData, makeBodyRow, colDefs, onClickRow, handleOnClickRow],
    );

    const footerRow = useMemo(() => (hasFooter ? (
      <S.TFooter>
        {makeFooterRow(footerDefs as FooterColumnDefinition[])}
      </S.TFooter>
    ) : null), [footerDefs, hasFooter, makeFooterRow]);

    return (
      <S.Table
        ref={ref}
        {...passThrough}
      >
        <S.THead>{headerRow}</S.THead>
        <S.TBody>{bodyRows}</S.TBody>
        {footerRow}
      </S.Table>
    );
  },
);

Table.displayName = 'Table';
Table.defaultProps = {
  footerDefs: [],
  onClickHeader: undefined,
  onClickRow: undefined,
  rowTemplate: undefined,
  headerRowTemplate: undefined,
  footerRowTemplate: undefined,
};

export default Table;
