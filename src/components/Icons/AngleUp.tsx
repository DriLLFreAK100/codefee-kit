import React, { forwardRef } from 'react';
import Icon, { IconProps } from './Icon';

const AngleUp = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => {
    const { children, ...passThrough } = props;

    return (
      <Icon ref={ref} viewBox="0 0 1792 1792" {...passThrough}>
        {children}
        <path
          fill="currentColor"
          d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
        />
      </Icon>
    );
  }
);

AngleUp.displayName = 'AngleUp';

export default AngleUp;
