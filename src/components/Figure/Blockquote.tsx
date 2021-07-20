import Typography from 'components/Typography';
import React, { FC, BlockquoteHTMLAttributes } from 'react';
import styled from 'styled-components';
import { cvar, rem } from 'utils';

export type BlockquoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>;

const StyledBlockquote = styled.blockquote<BlockquoteProps>`
  border-radius: ${cvar('--control-border-radius')};
  margin-bottom: ${rem(20)};
  padding: 0 ${rem(120)};
`;

const Blockquote: FC<BlockquoteProps> = (props: BlockquoteProps) => {
  const { children } = props;

  return (
    <StyledBlockquote {...props}>
      <Typography type="quote">
        {children}
      </Typography>
    </StyledBlockquote>
  );
};

export default Blockquote;
