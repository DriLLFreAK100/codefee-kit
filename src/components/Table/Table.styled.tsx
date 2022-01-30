import styled, { css } from 'styled-components';
import { AngleDown } from 'components/Icons';
import { TypographyStyles } from 'components/Typography';
import {
  cvar, cvarGen, jsonToCss, rem,
} from 'utils/StyleHelper';
import {
  Alignment, FlexAlignmentMap, OrderByDirection, TableSegment,
} from './Common';

export type CheckboxCssVarProps = {
  '--cf-table-head-row-height': string;
  '--cf-table-body-row-height': string;
  '--cf-table-foot-row-height': string;
  '--cf-table-row-border-color': string;
  '--cf-table-sort-active-color': string;
};

export const DefaultCssVar: CheckboxCssVarProps = {
  '--cf-table-head-row-height': rem(60),
  '--cf-table-body-row-height': rem(60),
  '--cf-table-foot-row-height': rem(60),
  '--cf-table-row-border-color': cvar('--color-gray-3'),
  '--cf-table-sort-active-color': cvar('--color-primary-dark'),
};

export const TableCssVar = css`${jsonToCss(DefaultCssVar)}`;

const cssVar = (p: keyof CheckboxCssVarProps) => cvarGen<CheckboxCssVarProps>(p);

const getRowHeight = (segment: TableSegment) => {
  switch (segment) {
    case 'head':
      return cssVar('--cf-table-head-row-height');
    case 'body':
      return cssVar('--cf-table-body-row-height');
    case 'foot':
      return cssVar('--cf-table-foot-row-height');
    default:
      return cssVar('--cf-table-body-row-height');
  }
};

const CellPaddingCss = css`
  &:first-child {
    padding-left: ${rem(20)};
  }

  &:last-child {
    padding-right: ${rem(20)};
  }
`;

export const Table = styled.table`
  ${TableCssVar};
  box-shadow: ${cvar('--control-shadow')};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

export const THead = styled.thead`
  min-height: ${cssVar('--cf-table-head-row-height')};
  box-shadow: ${cvar('--control-shadow')};
  overflow-y: scroll;
`;

export const TBody = styled.tbody`
  overflow-y: scroll;
`;

export const Tr = styled.tr<{
  segment?: TableSegment,
  isClickable?: boolean,
}>`
  height: ${({ segment }) => getRowHeight(segment || 'body')} ;
  border-bottom: ${rem(1)} solid ${({ segment }) => (segment === 'body' ? cssVar('--cf-table-row-border-color') : 'none')};
  border-top: ${rem(1)} solid ${({ segment }) => (segment === 'foot' ? cssVar('--cf-table-row-border-color') : 'none')};
  display: flex;
  width: 100%;
  box-sizing: border-box;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'initial')};
`;

export const Th = styled.th<{
  align: Alignment;
  sortable?: boolean;
  isSortActive?: boolean;
}>`
  font-size: ${rem(18)};
  font-family: ${cvar('--font-family-primary')};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => FlexAlignmentMap[align]};
  height: 100%;
  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'initial')};
  color: ${({ isSortActive }) => (isSortActive ? cssVar('--cf-table-sort-active-color') : 'initial')};
  border-bottom-width: ${rem(4)};
  border-bottom-style: solid;
  border-bottom-color: ${({ isSortActive }) => (isSortActive ? cssVar('--cf-table-sort-active-color') : 'transparent')};
  box-sizing: border-box;
  transition: color ${cvar('--transition-toggle')}, border-bottom-color ${cvar('--transition-toggle')};
  user-select: none;
  ${CellPaddingCss};
`;

export const Td = styled.td<{ align: Alignment }>`
  ${TypographyStyles.Body1Css()}
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => FlexAlignmentMap[align]};
  height: 100%;
  ${CellPaddingCss};
`;

export const TFooter = styled.tfoot`
  min-height: ${cssVar('--cf-table-foot-row-height')};
  overflow-y: scroll;

  ${Td}{
    font-size: ${rem(18)};
    font-family: ${cvar('--font-family-primary')};
    font-weight: 600;
  }
`;

export const SortIcon = styled(AngleDown) <{
  direction: OrderByDirection;
}>`
  color: ${cssVar('--cf-table-sort-active-color')};
  margin-left: ${rem(4)};
  transform: ${({ direction }) => (direction === 'desc' ? 'rotate(180deg)' : 'rotate(360deg)')};
  transition: color ${cvar('--transition-toggle')}, transform ${cvar('--transition-toggle')};
`;
