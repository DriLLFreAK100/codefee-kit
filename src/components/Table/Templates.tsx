import React, { ReactNode } from 'react';
import * as S from './Table.styled';
import {
  DataColumnDefinition,
  FooterColumnDefinition,
  getColumnFlexBasis,
  OrderByDirection,
} from './Common';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

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

export const defaultFooterRowTemplate = (footerDefs: FooterColumnDefinition[]): ReactNode => (
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
