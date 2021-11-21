import React, { ReactNode } from 'react';
import MultiClickArea, { MultiClickAreaProps } from '.';

const withMultiClick = (
  WrappedComponent: ReactNode,
  props: MultiClickAreaProps = {},
): ReactNode => (
  <MultiClickArea {...props}>
    {WrappedComponent}
  </MultiClickArea>
);

export default withMultiClick;
