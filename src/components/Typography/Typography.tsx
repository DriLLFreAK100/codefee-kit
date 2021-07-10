import Body1 from './Elements/Body1';
import Body2 from './Elements/Body2';
import Button from './Elements/Button';
import Caption from './Elements/Caption';
import H1 from './Elements/H1';
import H2 from './Elements/H2';
import H3 from './Elements/H3';
import H4 from './Elements/H4';
import H5 from './Elements/H5';
import H6 from './Elements/H6';
import Paragraph from './Elements/Paragraph';
import React, { FC, ReactNode } from 'react';
import Subtitle1 from './Elements/Subtitle1';
import Subtitle2 from './Elements/Subtitle2';

export type TypographyType =
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6' |
  'subtitle1' |
  'subtitle2' |
  'body1' |
  'body2' |
  'p' |
  'caption' |
  'button';

export interface ITypography {
  children?: ReactNode;
  type?: TypographyType;
}

const getComponent = (type: TypographyType) => {
  switch (type) {
    case 'h1':
      return H1;
    case 'h2':
      return H2;
    case 'h3':
      return H3;
    case 'h4':
      return H4;
    case 'h5':
      return H5;
    case 'h6':
      return H6;
    case 'subtitle1':
      return Subtitle1;
    case 'subtitle2':
      return Subtitle2;
    case 'body1':
      return Body1;
    case 'body2':
      return Body2;
    case 'p':
      return Paragraph;
    case 'caption':
      return Caption;
    case 'button':
      return Button;
    default:
      return Body1;
  }
};

const Typography: FC<ITypography> = ({
  children,
  type,
}: ITypography) => {
  const Component = getComponent(type as TypographyType);

  return (
    <Component>
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  children: undefined,
  type: 'body1',
};

export default Typography;
