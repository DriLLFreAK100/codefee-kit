import styled from 'styled-components';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { Typography } from 'components/Typography';

type DialogHeaderCssVar = {
  '--cf-dialog-header-border-bottom': string;
  '--cf-dialog-header-margin-bottom': string;
  '--cf-dialog-header-padding-bottom': string;
  '--cf-dialog-header-min-height': string;
};

const [defaultCssVar, cssVar] = makeCssVar<DialogHeaderCssVar>({
  '--cf-dialog-header-border-bottom': `${rem(1)} solid ${cvar('--color-gray-3')}`,
  '--cf-dialog-header-margin-bottom': rem(16),
  '--cf-dialog-header-padding-bottom': rem(4),
  '--cf-dialog-header-min-height': rem(48),
});

export const DialogHeader = styled.header`
  ${defaultCssVar};
  display: flex;
  min-height: ${cssVar('--cf-dialog-header-min-height')};
  border-bottom: ${cssVar('--cf-dialog-header-border-bottom')};
  margin-bottom: ${cssVar('--cf-dialog-header-margin-bottom')};
  padding: ${cssVar('--cf-dialog-header-padding-bottom')};
`;

export const TitleSection = styled(Typography)`
  flex: 1;
  line-height: ${cssVar('--cf-dialog-header-min-height')};
`;
