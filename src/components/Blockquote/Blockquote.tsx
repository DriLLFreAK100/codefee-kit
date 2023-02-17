import { Gutter } from 'common/Types';
import { Typography } from 'components/Typography';
import React, { BlockquoteHTMLAttributes, forwardRef, ReactNode } from 'react';
import * as S from './Blockquote.styled';
import styles from './Blockquote.module.scss';

export interface BlockquoteProps
  extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  cite?: string;
  caption?: ReactNode;
  children?: ReactNode;
  gutter?: Gutter;
}

const Blockquote = forwardRef<HTMLElement, BlockquoteProps>(
  (props: BlockquoteProps, ref) => {
    const { caption, children, gutter } = props;

    return (
      <S.Figure ref={ref} caption={caption} gutter={gutter}>
        <S.Blockquote {...props}>
          <Typography type="quote">
            {children}
            <span className={styles['root-a']}>test</span>
          </Typography>
        </S.Blockquote>
      </S.Figure>
    );
  }
);

Blockquote.displayName = 'Blockquote';
Blockquote.defaultProps = {
  cite: undefined,
  caption: undefined,
  gutter: undefined,
};

export default Blockquote;
