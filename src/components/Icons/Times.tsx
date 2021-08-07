import React, { ImgHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

export type TimesProp = ImgHTMLAttributes<SVGSVGElement>;

const StyledTimes = styled.svg`
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
const Times = forwardRef<SVGSVGElement, TimesProp>(
  (props: TimesProp, ref) => (
    <StyledTimes
      ref={ref}
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 352 512"
      {...props}
    >
      <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
    </StyledTimes>
  ),
);

Times.displayName = 'Times';

export default Times;
