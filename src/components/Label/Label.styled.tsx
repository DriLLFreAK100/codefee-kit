import styled from 'styled-components';
import { TypographyStyles } from 'components/Typography';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';

export type LabelCssVar = {
  '--cf-label-color': string;
  '--cf-label-margin-bottom': string;
};

const [defaultCssVar, cssVar] = makeCssVar<LabelCssVar>({
  '--cf-label-color': cvar('--color-gray-6'),
  '--cf-label-margin-bottom': rem(8),
});

export const Label = styled.label`
  ${defaultCssVar};
  ${TypographyStyles.Subtitle1Css()};
  display: block;
  margin-bottom: ${cssVar('--cf-label-margin-bottom')};
  color: ${cssVar('--cf-label-color')};
`;
