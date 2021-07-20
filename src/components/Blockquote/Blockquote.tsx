import Figure from 'components/Figure';
import React, { BlockquoteHTMLAttributes, FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Typography from 'components/Typography';
import { cvar, rem } from 'utils';
import { Gutter } from 'common/Types';

export interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  cite?: string;
  caption?: ReactNode;
  children?: ReactNode;
  gutter?: Gutter;
}

const QuoteBorderStyle = css`
  border-radius: ${cvar('--control-border-radius')};
  content: '';
  background-image: linear-gradient(to right, ${cvar('--color-secondary-light')}, ${cvar('--color-secondary-dark')}, ${cvar('--color-secondary-light')});
  left: calc(50% - ${rem(10)});
  height: ${rem(2)};
  width: ${rem(20)};
  position: absolute;
`;

const StyledFigure = styled(Figure)`
  position: relative;

  ::before {
    ${QuoteBorderStyle}
    top: 0;
  }

  ::after {
    ${QuoteBorderStyle}
    bottom: 0;
  }
`;

const StyledBlockquote = styled.blockquote<BlockquoteProps>`
  border-radius: ${cvar('--control-border-radius')};
  margin-bottom: ${rem(20)};
  padding: 0 ${rem(120)};
`;

const Blockquote: FC<BlockquoteProps> = (props: BlockquoteProps) => {
  const {
    caption,
    children,
    gutter,
  } = props;

  return (
    <StyledFigure caption={caption} gutter={gutter}>
      <StyledBlockquote {...props}>
        <Typography type="quote">
          {children}
        </Typography>
      </StyledBlockquote>
    </StyledFigure>
  );
};

Blockquote.displayName = 'Blockquote';
Blockquote.defaultProps = {
  cite: undefined,
  caption: undefined,
  gutter: undefined,
};

export default Blockquote;
