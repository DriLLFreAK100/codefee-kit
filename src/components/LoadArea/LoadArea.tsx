import CircularProgress from 'components/CircularProgress';
import React, {
  FC,
  forwardRef,
  ReactNode,
  CSSProperties,
} from 'react';
import * as S from './LoadArea.styled';

export interface LoadAreaProps {
  children?: ReactNode;
  className?: string;
  opacity?: number;
  loading: boolean;
  style?: CSSProperties;
  tag?: keyof JSX.IntrinsicElements;
  renderLoader?: () => ReactNode;
}

const LoadArea: FC<LoadAreaProps> = forwardRef<HTMLDivElement, LoadAreaProps>(({
  children,
  className,
  loading,
  opacity,
  style,
  tag,
  renderLoader,
}: LoadAreaProps, ref) => (
  <S.LoadArea
    as={tag}
    className={className}
    ref={ref}
    style={style}
  >
    {children}
    <S.Loader
      $loading={loading}
      $opacity={opacity as number}
    >
      {renderLoader ? renderLoader() : <CircularProgress />}
    </S.Loader>
  </S.LoadArea>
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
