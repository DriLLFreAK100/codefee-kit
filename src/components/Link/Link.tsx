import React, { forwardRef } from 'react';
import * as S from './Link.styled';
import { LinkProps } from './Common';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref) => {
    const {
      active,
      href,
      children,
      ...passThrough
    } = props;

    return (
      <S.Link
        ref={ref}
        href={href}
        active={active}
        {...passThrough}
      >
        {children}
      </S.Link>
    );
  },
);

Link.displayName = 'Link';
Link.defaultProps = {
  active: false,
  children: undefined,
};

export default Link;
