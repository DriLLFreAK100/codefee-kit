import React, { FC, ImgHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { cvar } from 'utils/StyleHelper';

export interface IconButtonProps extends ImgHTMLAttributes<HTMLButtonElement> {
  $type?: 'primary' | 'secondary';
}

const ThemeStyle = ({ $type }: IconButtonProps) => {
  switch ($type) {
    case 'primary':
      return css`
        background-color: ${cvar('--color-primary')};
        color: ${cvar('--color-primary-on')};
        transition: background-color ${cvar('--transition-hover')} ease-in-out;

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
        transition: background-color ${cvar('--transition-hover')} ease-in-out;

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
  ${(props) => ThemeStyle(props)};
`;

const IconButton: FC<IconButtonProps> = (props: IconButtonProps) => <StyledIconButton {...props} />;

IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
  $type: 'primary',
};

export default IconButton;
