import React, {
  FC, forwardRef, ReactNode, CSSProperties,
} from 'react';
import { TypographyElementProps } from './interface';
import * as S from './Typography.style';

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
  'button' |
  'quote';

export interface TypographyProps extends TypographyElementProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  type?: TypographyType;
}

const getComponent = (type: TypographyType) => {
  switch (type) {
    case 'h1':
      return S.H1;
    case 'h2':
      return S.H2;
    case 'h3':
      return S.H3;
    case 'h4':
      return S.H4;
    case 'h5':
      return S.H5;
    case 'h6':
      return S.H6;
    case 'subtitle1':
      return S.Subtitle1;
    case 'subtitle2':
      return S.Subtitle2;
    case 'body1':
      return S.Body1;
    case 'body2':
      return S.Body2;
    case 'p':
      return S.Paragraph;
    case 'caption':
      return S.Caption;
    case 'button':
      return S.Button;
    case 'quote':
      return S.Blockquote;
    default:
      return S.Body1;
  }
};

const Typography: FC<TypographyProps> = forwardRef<HTMLElement, TypographyProps>(({
  className,
  children,
  type,
  ...passThrough
}: TypographyProps, ref) => {
  const Component = getComponent(type as TypographyType);

  return (
    <Component
      ref={ref}
      className={className}
      {...passThrough}
    >
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';
Typography.defaultProps = {
  className: '',
  children: undefined,
  gutterBottom: undefined,
  subtle: false,
  style: {},
  type: 'body1',
};

export default Typography;
