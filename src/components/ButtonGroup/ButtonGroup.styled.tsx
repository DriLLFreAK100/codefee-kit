import styled, { css } from 'styled-components';
import { cvar, rem, makeCssVar } from 'utils/StyleHelper';
import { ButtonCss } from 'components/Button/Button.styled';

export type ButtonGroupCssVar = {
  '--cf-button-group-border-color': string;
  '--cf-button-group-button-background-color': string;
  '--cf-button-group-button-background-color-hover': string;
  '--cf-button-group-button-background-color-active': string;
  '--cf-button-group-button-color': string;
  '--cf-button-group-button-color-hover': string;
  '--cf-button-group-button-color-active': string;
};

const [defaultCssVar, cssVar] = makeCssVar<ButtonGroupCssVar>({
  '--cf-button-group-border-color': cvar('--color-primary-light'),
  '--cf-button-group-button-background-color': cvar('--control-bg-color'),
  '--cf-button-group-button-background-color-hover': cvar('--color-primary-light'),
  '--cf-button-group-button-background-color-active': cvar('--color-primary-dark'),
  '--cf-button-group-button-color': 'initial',
  '--cf-button-group-button-color-hover': cvar('--color-primary-on'),
  '--cf-button-group-button-color-active': cvar('--color-primary-on'),
});

export const ButtonGroup = styled.div`
  ${defaultCssVar};
  box-sizing: border-box;
  height: ${cvar('--control-height')};
  display: inline-flex;
`;

const SelectedButtonCss = css`
  background-color: ${cssVar('--cf-button-group-button-background-color-active')};
  color: ${cssVar('--cf-button-group-button-color-active')};

  &:hover{
    background-color: ${cssVar('--cf-button-group-button-background-color-active')};
    color: ${cssVar('--cf-button-group-button-color-active')};
  }
`;

export const Button = styled.button<{ selected: boolean }>`
  ${ButtonCss};
  background-color: ${cssVar('--cf-button-group-button-background-color')};
  border-radius: initial;
  border-color: ${cssVar('--cf-button-group-border-color')};
  border-style: solid;
  border-width: ${rem(1)} 0 ${rem(1)} ${rem(1)};
  height: 100%;
  
  
  &:first-child{
    border-radius: ${cvar('--control-border-radius')} 0 0 ${cvar('--control-border-radius')};
  }

  &:last-child{
    border-radius: 0 ${cvar('--control-border-radius')} ${cvar('--control-border-radius')} 0;
    border-width: ${rem(1)};
  }

  &:hover{
    background-color: ${cssVar('--cf-button-group-button-background-color-hover')};
    color: ${cssVar('--cf-button-group-button-color-hover')};
  }

  &:active{
    background-color: ${cssVar('--cf-button-group-button-background-color-active')};
    color: ${cssVar('--cf-button-group-button-color-active')};
  }

  ${({ selected }) => selected && SelectedButtonCss};
`;
