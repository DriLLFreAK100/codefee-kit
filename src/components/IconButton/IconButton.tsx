import React, {
  FC, forwardRef, ImgHTMLAttributes, memo,
} from 'react';
import styled, { css } from 'styled-components';
import { cvar } from 'utils/StyleHelper';

export interface IconButtonProps extends ImgHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const ThemeStyle = ({ variant }: IconButtonProps) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${cvar('--color-primary')};
        color: ${cvar('--color-primary-on')};

        &:hover{
          background-color: ${cvar('--color-primary-light')};
        }

        &:active{
          background-color: ${cvar('--color-primary-dark')};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${cvar('--color-secondary')};
        color: ${cvar('--color-secondary-on')};

        &:hover{
          background-color: ${cvar('--color-secondary-light')};
        }

        &:active{
          background-color: ${cvar('--color-secondary-dark')};
        }
      `;
    default:
      return css``;
  }
};

const StyledIconButton = styled.button<IconButtonProps>`
  height: ${cvar('--control-height')};
  width: ${cvar('--control-height')};
  border: 0;
  border-radius: 50%;
  box-shadow: ${cvar('--control-shadow')};
  transition: background-color ${cvar('--transition-hover')} ease-in-out;
  ${(props) => ThemeStyle(props)};
`;

const IconButton: FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref) => <StyledIconButton ref={ref} {...props} />,
);

IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
  variant: 'primary',
};

export default memo(IconButton);
