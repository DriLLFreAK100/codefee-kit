import styled, { css } from 'styled-components';
import {
  cvar, cvarGen, jsonToCss, rem,
} from 'utils/StyleHelper';
import { TypographyStyles } from 'components/Typography';
import { Alignment, TableSegment, FlexAlignmentMap } from './Common';

export type CheckboxCssVarProps = {
  '--cf-table-head-row-height': string;
  '--cf-table-body-row-height': string;
  '--cf-table-foot-row-height': string;
  '--cf-table-row-border-color': string;
};

export const DefaultCssVar: CheckboxCssVarProps = {
  '--cf-table-head-row-height': rem(60),
  '--cf-table-body-row-height': rem(60),
  '--cf-table-foot-row-height': rem(60),
  '--cf-table-row-border-color': cvar('--color-gray-3'),
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

export const Tr = styled.tr<{ segment?: TableSegment }>`
  height: ${({ segment }) => getRowHeight(segment || 'body')} ;
  border-bottom: ${rem(1)} solid ${({ segment }) => (segment === 'body' ? cssVar('--cf-table-row-border-color') : 'none')};
  border-top: ${rem(1)} solid ${({ segment }) => (segment === 'foot' ? cssVar('--cf-table-row-border-color') : 'none')};
  display: flex;
  width: 100%;
  padding: 0 ${rem(20)};
  box-sizing: border-box;
`;

export const Th = styled.th<{
  align: Alignment;
  sortable?: boolean;
}>`
  font-size: ${rem(18)};
  font-family: ${cvar('--font-family-primary')};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => FlexAlignmentMap[align]};
  height: 100%;
  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'initial')};
`;

export const Td = styled.td<{ align: Alignment }>`
  ${TypographyStyles.Body1Css()}
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => FlexAlignmentMap[align]};
  height: 100%;
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
