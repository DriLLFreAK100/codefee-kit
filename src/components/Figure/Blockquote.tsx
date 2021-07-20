import Typography from 'components/Typography';
import React, { FC, BlockquoteHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { cvar, rem } from 'utils';

export type BlockquoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>;

const StyledBlockquote = styled.blockquote<BlockquoteProps>`
  border-radius: ${cvar('--control-border-radius')};
  margin-bottom: ${rem(20)};
  padding: 0 ${rem(120)};
`;

const QuoteBorderStyle = css`
  border-radius: ${cvar('--control-border-radius')};
  content: '';
  background-image: linear-gradient(to bottom, ${cvar('--color-secondary-light')}, ${cvar('--color-secondary-dark')});
  top: 0px;
  height: 100%;
  width: ${rem(2)};
  position: absolute;
`;

const StyledTypography = styled(Typography)`
  position: relative;

  ::before {
    ${QuoteBorderStyle}
    left: 0px;
  }

  ::after {
    ${QuoteBorderStyle}
    right: 0px;
  }
`;

const Blockquote: FC<BlockquoteProps> = (props: BlockquoteProps) => {
  const { children } = props;

  return (
    <StyledBlockquote {...props}>
      <StyledTypography type="quote">
        {children}
      </StyledTypography>
    </StyledBlockquote>
  );
};

export default Blockquote;
