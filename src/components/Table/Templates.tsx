import React, { ReactNode } from 'react';
import { Typography } from 'components/Typography';
import * as S from './Table.styled';
import {
  DataColumnDefinition,
  FooterColumnDefinition,
  getColumnStyle,
  getContentTitle,
  OrderByDirection,
} from './Common';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export const defaultBodyRowTemplate = (
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
        const {
          id,
          field,
          align,
          render,
        } = colDef;

        const datum = data[field || ''];
        const node: ReactNode = render ? render(datum, data) : datum;

        return (
          <S.Td
            key={id}
            style={getColumnStyle(colDef, colDefs)}
            align={align || 'left'}
            title={getContentTitle(node)}
          >
            <S.CellContent>
              {node}
            </S.CellContent>
          </S.Td>
        );
      })}
    </S.Tr>
  );
};

export const defaultHeaderRowTemplate = (
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
          id, header, field, align, disableSort,
        } = colDef;

        const isSortActive = sortKey === field;

        return (
          <S.Th
            key={id}
            style={getColumnStyle(colDef, colDefs)}
            align={align || 'left'}
            sortable={!disableSort}
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

export const defaultFooterRowTemplate = (footerDefs: FooterColumnDefinition[]): ReactNode => (
  <S.Tr segment="foot">
    {footerDefs.map((footerDef) => {
      const { id, align, value } = footerDef;
      return (
        <S.Td
          key={id}
          style={getColumnStyle(footerDef, footerDefs)}
          align={align || 'left'}
        >
          <S.CellContent>
            {value}
          </S.CellContent>
        </S.Td>
      );
    })}
  </S.Tr>
);

export const defaultEmptyRecordTemplate = (emptyRecordContent: ReactNode) => (
  <S.EmptyRecordTr>
    <S.EmptyRecordTd>
      <Typography>
        {emptyRecordContent}
      </Typography>
    </S.EmptyRecordTd>
  </S.EmptyRecordTr>
);
