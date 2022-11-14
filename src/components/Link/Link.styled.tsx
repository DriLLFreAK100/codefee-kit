import styled from 'styled-components';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { TypographyStyles } from 'components/Typography';
import { LinkProps } from './Common';

export type LinkCssVarProps = {
  '--cf-link-color': string;
  '--cf-link-color-hover': string;
  '--cf-link-color-active': string;
};

const [defaultCssVar, cssVar] = makeCssVar<LinkCssVarProps>({
  '--cf-link-color': cvar('--color-primary'),
  '--cf-link-color-hover': cvar('--color-primary-light'),
  '--cf-link-color-active': cvar('--color-primary-dark'),
});

export const Link = styled.a<LinkProps>`
  ${TypographyStyles.Body1Css()}
  ${defaultCssVar}
  cursor: pointer;
  color: ${cssVar('--cf-link-color')};
  user-select: none;
  transition: border-width ${cvar('--transition-toggle')},
    color ${cvar('--transition-hover')},
    border-color ${cvar('--transition-hover')};
  border-bottom: 1px solid ${cssVar('--cf-link-color')};
  text-decoration: none;

  ${({ active }) =>
    active
      ? `
     color: ${cssVar('--cf-link-color-hover')};
     border-bottom: ${rem(4)} solid ${cssVar('--cf-link-color-hover')};
     font-weight: 700;
  `
      : null}

  &:hover {
    color: ${cssVar('--cf-link-color-hover')};
    border-bottom: ${rem(4)} solid ${cssVar('--cf-link-color-hover')};
  }

  &:active {
    color: ${cssVar('--cf-link-color-active')};
    border-bottom-color: ${rem(4)} solid ${cssVar('--cf-link-color-active')};
  }

  &:focus {
    outline: transparent;
  }
`;
