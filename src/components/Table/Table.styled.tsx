import {
  cvar, cvarGen, jsonToCss, rem,
} from 'utils/StyleHelper';
import styled, { css } from 'styled-components';

export type CheckboxCssVarProps = {
  '--cf-table-row-height': string;
  '--cf-table-row-border-color': string;
};

export const DefaultCssVar: CheckboxCssVarProps = {
  '--cf-table-row-height': rem(60),
  '--cf-table-row-border-color': cvar('--color-gray-3'),
};

export const TableCssVar = css`${jsonToCss(DefaultCssVar)}`;

const cssVar = (p: keyof CheckboxCssVarProps) => cvarGen<CheckboxCssVarProps>(p);

export const Table = styled.table`
  ${TableCssVar};
  box-shadow: ${cvar('--control-shadow')};
  box-sizing: border-box;
  width: 100%;
`;

export const Thead = styled.thead`
  min-height: ${cssVar('--cf-table-row-height')};
`;

export const Tbody = styled.tbody`
`;

export const Tr = styled.tr`
  height: ${cssVar('--cf-table-row-height')};
  border-bottom: ${rem(1)} solid ${cssVar('--cf-table-row-border-color')};
`;

export const Th = styled.th`
`;

export const Td = styled.td`
`;
