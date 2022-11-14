import styled from 'styled-components';
import Button from 'components/Button';
import { IconButtonStyles } from 'components/IconButton';
import { cvar, rem } from 'utils/StyleHelper';
import { cssVar, defaultCssVar } from './Common';

export const Picker = styled.div`
  ${defaultCssVar};
  position: relative;
  display: inline-block;
`;

export const InputGroup = styled.div`
  display: inline-block;
  position: relative;
`;

const halfDimension = `calc(${cssVar('--cf-date-picker-icon-dimension')} / 2)`;

export const IconButton = styled.button`
  ${IconButtonStyles.SubtleIconButtonCss};
  position: absolute;
  right: ${cssVar('--cf-date-picker-icon-margin-right')};
  top: calc(${rem(48 / 2)} - ${halfDimension});
  height: ${cssVar('--cf-date-picker-icon-dimension')};
  width: ${cssVar('--cf-date-picker-icon-dimension')};
`;

export const Selector = styled.div`
  background-color: ${cssVar('--cf-date-picker-background-color')};
  position: absolute;
  box-shadow: ${cvar('--control-shadow')};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 ${rem(16)} ${rem(8)};
`;

export const CtrlButton = styled(Button)`
  min-width: 0;

  &:not(:last-child) {
    margin-right: ${rem(8)};
  }
`;
