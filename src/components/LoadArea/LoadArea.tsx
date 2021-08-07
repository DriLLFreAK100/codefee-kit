import CircularProgress from 'components/CircularProgress';
import styled, { CSSProperties } from 'styled-components';
import { cvar } from 'utils/StyleHelper';
import React, {
  FC,
  forwardRef,
  ReactNode,
} from 'react';

export interface LoadAreaProps {
  children?: ReactNode;
  className?: string;
  opacity?: number;
  loading: boolean;
  style?: CSSProperties;
  tag?: keyof JSX.IntrinsicElements;
  renderLoader?: () => ReactNode;
}

interface LoaderProps {
  $opacity: number;
  $loading: boolean;
}

const StyledLoadArea = styled.div`
  position: relative;
`;

const StyledLoader = styled.div<LoaderProps>`
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

const LoadArea: FC<LoadAreaProps> = forwardRef<HTMLDivElement, LoadAreaProps>(({
  children,
  className,
  loading,
  opacity,
  style,
  tag,
  renderLoader,
}: LoadAreaProps, ref) => (
  <StyledLoadArea
    as={tag}
    className={className}
    ref={ref}
    style={style}
  >
    {children}
    <StyledLoader
      $loading={loading}
      $opacity={opacity as number}
    >
      {renderLoader ? renderLoader() : <CircularProgress />}
    </StyledLoader>
  </StyledLoadArea>
));

LoadArea.displayName = 'LoadArea';
LoadArea.defaultProps = {
  children: undefined,
  className: '',
  opacity: 0.6,
  style: {},
  tag: 'section',
  renderLoader: undefined,
};

export default LoadArea;
