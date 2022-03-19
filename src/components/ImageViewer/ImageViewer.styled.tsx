import { IconButton } from 'components/IconButton';
import styled, { css } from 'styled-components';
import { cvar } from 'utils';
import { Times } from 'components/Icons';

export const Image = styled.img`
  border-radius: ${cvar('--control-border-radius')};
  height: 100%;
`;

export const ImageContainer = styled.div<{ maximize: boolean; }>`
  cursor: pointer;
  display: inline-block;
  height: calc(100% - 20px);

  ${(props) => props.maximize && css`
    cursor: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;

    ${Image}{
      height: unset;
      max-height: 100vh;
      max-width: 100%;
    }
  `}
`;

export const CloseIconButton = styled(IconButton)`
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

export const TimesIcon = styled(Times)`
  font-size: 1.25rem;
`;
