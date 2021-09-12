import React, { forwardRef, SVGAttributes } from 'react';
import styled from 'styled-components';

export type IconProps = SVGAttributes<SVGSVGElement>;

const StyledIcon = styled.svg`
  overflow: visible;
  width: 0.6875em;
  top: 0;
  right: 0;
  display: inline-block;
  height: 1em;
  vertical-align: -0.125em;
`;

/**
 * Adopted from FontAwesome Icon
 */
const Icon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => {
    const { children, ...passThrough } = props;

    return (
      <StyledIcon
        ref={ref}
        aria-hidden="true"
        focusable="false"
        role="img"
        viewBox="0 0 352 512"
        {...passThrough}
      >
        {children}
      </StyledIcon>
    );
  },
);

Icon.displayName = 'Icon';

export default Icon;
