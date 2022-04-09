import { Typography } from 'components/Typography';
import styled from 'styled-components';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';

type DialogHeaderCssVar = {
  '--cf-dialog-header-border-bottom': string;
  '--cf-dialog-header-margin-bottom': string;
};

const [defaultCssVar, cssVar] = makeCssVar<DialogHeaderCssVar>({
  '--cf-dialog-header-border-bottom': `${rem(1)} solid ${cvar('--color-gray-3')}`,
  '--cf-dialog-header-margin-bottom': rem(12),
});

export const DialogHeader = styled.div`
  ${defaultCssVar};
  display: flex;
  min-height: ${rem(48)};
  border-bottom: ${cssVar('--cf-dialog-header-border-bottom')};
  margin-bottom: ${cssVar('--cf-dialog-header-margin-bottom')};
`;

export const TitleSection = styled(Typography)`
  flex: 1;
  display: flex;
  align-items: center;
`;
