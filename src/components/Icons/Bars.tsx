import React, { forwardRef } from 'react';
import Icon, { IconProps } from './Icon';

const Bars = forwardRef<SVGSVGElement, IconProps>((props: IconProps, ref) => {
  const { children, ...passThrough } = props;

  return (
    <Icon
      ref={ref}
      height={1792}
      width={1792}
      viewBox="0 0 1792 1792"
      {...passThrough}
    >
      {children}
      <path
        fill="currentColor"
        d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
      />
    </Icon>
  );
});

Bars.displayName = 'Bars';

export default Bars;
