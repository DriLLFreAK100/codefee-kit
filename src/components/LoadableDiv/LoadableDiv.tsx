import CircularProgress from 'components/CircularProgress';
import React, {
  FC,
  forwardRef,
  memo,
  ReactNode,
} from 'react';
import styled, { CSSProperties } from 'styled-components';
import { cvar } from 'utils/StyleHelper';

export interface LoadableDivProps {
  children?: ReactNode;
  className?: string;
  opacity?: number;
  loading: boolean;
  style?: CSSProperties;
  renderLoader?: () => ReactNode;
}

interface LoaderProps {
  $opacity: number;
  $loading: boolean;
}

const StyledLoadableDiv = styled.div`
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

const LoadableDiv: FC<LoadableDivProps> = forwardRef<HTMLDivElement, LoadableDivProps>(({
  children,
  className,
  loading,
  opacity,
  style,
  renderLoader,
}: LoadableDivProps, ref) => (
  <StyledLoadableDiv
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
  </StyledLoadableDiv>
));

LoadableDiv.displayName = 'LoadableDiv';
LoadableDiv.defaultProps = {
  children: undefined,
  className: '',
  opacity: 0.6,
  style: {},
  renderLoader: undefined,
};

export default memo(LoadableDiv);
