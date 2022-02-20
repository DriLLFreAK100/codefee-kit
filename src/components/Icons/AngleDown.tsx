import React, { forwardRef } from 'react';
import Icon, { IconProps } from './Icon';

const AngleDown = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => {
    const {
      children,
      ...passThrough
    } = props;

    return (
      <Icon
        ref={ref}
        viewBox="0 0 1792 1792"
        {...passThrough}
      >
        {children}
        <path fill="currentColor" d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
      </Icon>
    );
  },
);

AngleDown.displayName = 'AngleDown';

export default AngleDown;
