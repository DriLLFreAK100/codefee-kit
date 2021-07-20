import React, { FC, BlockquoteHTMLAttributes } from 'react';
import styled from 'styled-components';
import { cvar, rem } from 'utils';

export type BlockquoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>;

const StyledBlockquote = styled.blockquote<BlockquoteProps>`
  border-radius: ${cvar('--control-border-radius')};
  margin-bottom: ${rem(20)};
`;

const Blockquote: FC<BlockquoteProps> = (props) => <StyledBlockquote {...props} />;

export default Blockquote;
