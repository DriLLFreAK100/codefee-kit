import React, {
  forwardRef,
  HtmlHTMLAttributes,
  MouseEvent,
  useCallback,
  useRef,
} from 'react';
import * as S from './MultiClickArea.styled';

export type MultiClickAreaProps = {
  countTarget?: number;
  debounceTime?: number;
} & HtmlHTMLAttributes<HTMLDivElement>;

const MultiClickArea = forwardRef<HTMLDivElement, MultiClickAreaProps>(
  (props: MultiClickAreaProps, ref) => {
    const { children, countTarget, debounceTime, onClick, ...passThrough } =
      props;

    const clickCount = useRef(0);

    const handleOnClick = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        if (clickCount.current < (countTarget as number)) {
          clickCount.current += 1;
        }

        setTimeout(() => {
          if (clickCount.current === countTarget && onClick) {
            onClick(e);
          }

          clickCount.current = 0;
        }, debounceTime);
      },
      [countTarget, debounceTime, onClick]
    );

    return (
      <S.MultiClickArea ref={ref} onClick={handleOnClick} {...passThrough}>
        {children}
      </S.MultiClickArea>
    );
  }
);

MultiClickArea.displayName = 'MultiClickArea';
MultiClickArea.defaultProps = {
  countTarget: 2,
  debounceTime: 500,
};

export default MultiClickArea;
