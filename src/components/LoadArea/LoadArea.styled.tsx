import styled from 'styled-components';
import { cvar } from 'utils/StyleHelper';

interface LoaderProps {
  $opacity: number;
  $loading: boolean;
}

export const LoadArea = styled.div`
  position: relative;
`;

export const Loader = styled.div<LoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background: ${({ $opacity }) => `rgba(255, 255, 255, ${$opacity})`};
  visibility: ${({ $loading }) => ($loading ? 'visible' : 'hidden')};
  opacity: ${({ $loading }) => ($loading ? 1 : 0)};
  transition: visibility ${cvar('--transition-toggle')} ease-in-out, opacity ${cvar('--transition-toggle')} ease-in-out;
`;
