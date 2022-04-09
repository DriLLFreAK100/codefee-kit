import styled from 'styled-components';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';

type DialogFooterCssVar = {
  '--cf-dialog-footer-border-top': string;
  '--cf-dialog-footer-padding-top': string;
};

const [defaultCssVar, cssVar] = makeCssVar<DialogFooterCssVar>({
  '--cf-dialog-footer-border-top': `${rem(1)} solid ${cvar('--color-gray-3')}`,
  '--cf-dialog-footer-padding-top': rem(12),
});

export const DialogFooter = styled.div`
  ${defaultCssVar};
  min-height: ${rem(48)};
  border-top: ${cssVar('--cf-dialog-footer-border-top')};
  padding-top: ${cssVar('--cf-dialog-footer-padding-top')};
`;
