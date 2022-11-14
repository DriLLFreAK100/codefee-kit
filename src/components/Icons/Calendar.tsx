import React, { forwardRef } from 'react';
import Icon, { IconProps } from './Icon';

const Calendar = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => {
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
          d="M192 1664h1408v-1024h-1408v1024zm384-1216v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm768 0v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
        />
      </Icon>
    );
  }
);

Calendar.displayName = 'Calendar';

export default Calendar;
