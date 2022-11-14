import React, {
  forwardRef,
  ReactNode,
  TableHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as S from './Table.styled';
import {
  defaultBodyRowTemplate,
  defaultEmptyRecordTemplate,
  defaultFooterRowTemplate,
  defaultHeaderRowTemplate,
} from './Templates';
import {
  DataColumnDefinition,
  defaultSortKey,
  FooterColumnDefinition,
  OrderByDirection,
  SortKey,
  trySortData,
} from './Common';
/* eslint-disable @typescript-eslint/no-explicit-any */

export type TableProps = {
  data: any[];
  colDefs: DataColumnDefinition[];
  footerDefs?: FooterColumnDefinition[];
  emptyRecordContent?: ReactNode;
  onClickHeader?: (colDef: DataColumnDefinition) => void;
  onClickRow?: (data: any) => void;
  rowTemplate?: (
    colDef: DataColumnDefinition[],
    data: any,
    rowIndex: number,
    isClickable: boolean,
    onClickRow?: (data: any) => void
  ) => ReactNode;
  headerRowTemplate?: (
    colDefs: DataColumnDefinition[],
    sortState: [string, OrderByDirection],
    onClickHeader?: (colDef: DataColumnDefinition) => void
  ) => ReactNode;
  footerRowTemplate?: (colDef: FooterColumnDefinition[]) => ReactNode;
  emptyRecordTemplate?: (emptyRecordContent: ReactNode) => ReactNode;
} & TableHTMLAttributes<HTMLTableElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(
  (props: TableProps, ref) => {
    const {
      data,
      colDefs,
      footerDefs,
      emptyRecordContent,
      onClickHeader,
      onClickRow,
      rowTemplate,
      headerRowTemplate,
      footerRowTemplate,
      emptyRecordTemplate,
      ...passThrough
    } = props;

    const [computedData, setComputedData] = useState<any[]>(data);
    const sortKey = useRef<SortKey>(defaultSortKey);

    useEffect(() => setComputedData(data), [data]);

    const handleOnClickHeader = useCallback(
      (colDef: DataColumnDefinition) => {
        trySortData(
          computedData,
          colDef,
          sortKey.current,
          ([updatedSortKey, sortedData]) => {
            sortKey.current = updatedSortKey;
            setComputedData(sortKey.current[0] ? sortedData : data);
          }
        );

        onClickHeader?.(colDef);
      },
      [computedData, data, onClickHeader]
    );

    const handleOnClickRow = useCallback(
      (rowData: any) => {
        onClickRow?.(rowData);
      },
      [onClickRow]
    );

    const headerRow = useMemo(
      () => headerRowTemplate?.(colDefs, sortKey.current, handleOnClickHeader),
      [colDefs, handleOnClickHeader, headerRowTemplate]
    );

    const bodyRows = useMemo(
      () =>
        computedData.length > 0
          ? computedData.map((datum, index) =>
              rowTemplate?.(
                colDefs,
                datum,
                index,
                !!onClickRow,
                handleOnClickRow
              )
            )
          : emptyRecordTemplate?.(emptyRecordContent),
      [
        computedData,
        emptyRecordTemplate,
        emptyRecordContent,
        rowTemplate,
        colDefs,
        onClickRow,
        handleOnClickRow,
      ]
    );

    const footerRow = useMemo(
      () =>
        (footerDefs || []).length > 0 ? (
          <S.TFooter>
            {footerRowTemplate?.(footerDefs as FooterColumnDefinition[])}
          </S.TFooter>
        ) : null,
      [footerDefs, footerRowTemplate]
    );

    return (
      <S.Table ref={ref} {...passThrough}>
        <S.THead>{headerRow}</S.THead>
        <S.TBody>{bodyRows}</S.TBody>
        {footerRow}
      </S.Table>
    );
  }
);

Table.displayName = 'Table';
Table.defaultProps = {
  footerDefs: [],
  onClickHeader: undefined,
  onClickRow: undefined,
  emptyRecordContent: 'No Records',
  rowTemplate: defaultBodyRowTemplate,
  headerRowTemplate: defaultHeaderRowTemplate,
  footerRowTemplate: defaultFooterRowTemplate,
  emptyRecordTemplate: defaultEmptyRecordTemplate,
};

export default Table;
