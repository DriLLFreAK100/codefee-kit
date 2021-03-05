import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

type TypographyType =
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

interface ITypography {
  children?: ReactNode;
  type?: TypographyType;
}

const H1 = styled.h1`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(96)};
  line-height: ${rem(112)};
  font-weight: lighter;
  letter-spacing: ${rem(-1.5)};
`;

const H2 = styled.h2`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(60)};
  line-height: ${rem(72)};
  font-weight: lighter;
  letter-spacing: ${rem(-0.5)};
`;

const H3 = styled.h3`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(48)};
  line-height: ${rem(60)};
  font-weight: normal;
  letter-spacing: ${rem(0)};
`;

const H4 = styled.h4`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(36)};
  line-height: ${rem(48)};
  font-weight: normal;
  letter-spacing: ${rem(0.25)};
`;

const H5 = styled.h5`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(24)};
  line-height: ${rem(36)};
  font-weight: normal;
  letter-spacing: ${rem(0)};
`;

const H6 = styled.h6`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(20)};
  line-height: ${rem(32)};
  font-weight: 500;
  letter-spacing: ${rem(0.15)};
`;

const Subtitle1 = styled.h6`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(16)};
  line-height: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.15)};
`;

const Subtitle2 = styled.h6`
  font-family: ${cvar('--font-family-primary')};
  font-size: ${rem(14)};
  line-height: ${rem(16)};
  font-weight: 500;
  letter-spacing: ${rem(0.1)};
`;

const Body1 = styled.p`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  font-weight: normal;
  letter-spacing: ${rem(0.5)};
`;

const Body2 = styled.p`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(14)};
  font-weight: normal;
  letter-spacing: ${rem(0.25)};
`;

const P = styled.p`
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  margin-bottom: ${rem(20)};
`;

const Caption = styled.figcaption`
  display: block;
  font-family: ${cvar('--font-family-secondary')};
  font-size: ${rem(12)};
  font-weight: normal;
  letter-spacing: ${rem(0.4)};
`;

const Button = styled.span`
  display:block;
  font-family: ${cvar('--font-family-secondary')};
  font-weight: 500;
  font-size: ${rem(14)};
  letter-spacing: ${rem(1.25)};
  text-transform: uppercase;
`;

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
      return P;
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
export type { ITypography };
