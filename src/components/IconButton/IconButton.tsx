import React, {
  forwardRef, ButtonHTMLAttributes,
} from 'react';
import * as S from './IconButton.styled';

export type IconButtonVariantType = 'primary' | 'secondary';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariantType;
}

const getComponent = (variant: IconButtonVariantType) => {
  switch (variant) {
    case 'primary':
      return S.PrimaryIconButton;
    case 'secondary':
      return S.SecondaryIconButton;
    default:
      return S.PrimaryIconButton;
  }
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref) => {
    const {
      variant,
      ...passThrough
    } = props;

    const Component = getComponent(variant as IconButtonVariantType);

    return (
      <Component ref={ref} {...passThrough} />
    );
  },
);

IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
  variant: 'primary',
};

export default IconButton;
