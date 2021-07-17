import CircularProgress from 'components/CircularProgress';
import React, {
  FC,
  forwardRef,
  memo,
  ReactNode
} from 'react';
import styled, { CSSProperties } from 'styled-components';
import { cvar } from 'utils/StyleHelper';

export interface LoadableDivProps {
  children?: ReactNode;
  className?: string;
  opacity?: number;
  loading: boolean;
  style?: CSSProperties;
}

const StyledLoadableDiv = styled.div`
  position: relative;
`;

const StyledLoader = styled.div<LoadableDivProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: visibility ${cvar('--transition-hover')} ease-in-out, opacity ${cvar('--transition-hover')} ease-in-out, ;

  ${(props) => !props.loading && `
    visibility: visible;
    background: white;
    opacity: ${props.opacity};
  `}
`;

const LoadableDiv: FC<LoadableDivProps> = forwardRef<HTMLDivElement, LoadableDivProps>(({
  children,
  className,
  loading,
  opacity,
  style,
}: LoadableDivProps, ref) => (
  <StyledLoadableDiv
    className={className}
    ref={ref}
    style={style}
  >
    {children}
    <StyledLoader
      loading={loading}
      opacity={opacity}
    >
      <CircularProgress />
    </StyledLoader>
  </StyledLoadableDiv>
));

LoadableDiv.displayName = 'LoadableDiv';
LoadableDiv.defaultProps = {
  children: undefined,
  className: '',
  opacity: 0.6,
  style: {},
};

export default memo(LoadableDiv);
