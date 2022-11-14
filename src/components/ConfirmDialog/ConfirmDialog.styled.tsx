import ButtonComponent from 'components/Button';
import Dialog from 'components/Dialog';
import styled from 'styled-components';
import { makeCssVar, rem } from 'utils/StyleHelper';

type ConfirmDialogCssVar = {
  '--cf-confirm-dialog-content-min-height': string;
};

const [defaultCssVar, cssVar] = makeCssVar<ConfirmDialogCssVar>({
  '--cf-confirm-dialog-content-min-height': rem(60),
});

export const ConfirmDialog = styled(Dialog)`
  ${defaultCssVar};
`;

export const Content = styled.div`
  min-height: ${cssVar('--cf-confirm-dialog-content-min-height')};
`;

export const Button = styled(ButtonComponent)`
  :not(:last-child) {
    margin-right: ${rem(4)};
  }
`;
