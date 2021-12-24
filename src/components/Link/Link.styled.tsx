import styled, { css } from 'styled-components';
import {
  cvar, cvarGen, jsonToCss, rem,
} from 'utils/StyleHelper';
import { TypographyStyles } from 'components/Typography';
import { LinkProps } from './Common';

export interface LinkCssVarProps {
  '--cf-link-color': string;
  '--cf-link-color-hover': string;
  '--cf-link-color-active': string;
}

export const DefaultCssVar: LinkCssVarProps = {
  '--cf-link-color': cvar('--color-primary'),
  '--cf-link-color-hover': cvar('--color-primary-light'),
  '--cf-link-color-active': cvar('--color-primary-dark'),
};

export const LinkCssVar = css`${jsonToCss(DefaultCssVar)}`;

export const Link = styled.a<LinkProps>`
  ${TypographyStyles.Body1Css()}
  ${LinkCssVar}
  cursor: pointer;
  color: ${cvarGen<LinkCssVarProps>('--cf-link-color')};
  user-select: none;
  transition: border-width ${cvar('--transition-toggle')}, color ${cvar('--transition-hover')}, border-color ${cvar('--transition-hover')};
  border-bottom: 1px solid ${cvarGen<LinkCssVarProps>('--cf-link-color')};
  text-decoration: none;

  ${({ active }) => (active ? `
     color: ${cvarGen<LinkCssVarProps>('--cf-link-color-hover')};
     border-bottom: ${rem(4)} solid ${cvarGen<LinkCssVarProps>('--cf-link-color-hover')};
     font-weight: 700;
  ` : null)}

  &:hover{
    color: ${cvarGen<LinkCssVarProps>('--cf-link-color-hover')};
    border-bottom: ${rem(4)} solid ${cvarGen<LinkCssVarProps>('--cf-link-color-hover')};
  }

  &:active{
    color: ${cvarGen<LinkCssVarProps>('--cf-link-color-active')};
    border-bottom-color: ${rem(4)} solid ${cvarGen<LinkCssVarProps>('--cf-link-color-active')};
  }

  &:focus{
    outline: transparent;
  }
`;
