import React, {
  forwardRef, HtmlHTMLAttributes, ReactNode, useCallback,
} from 'react';
import { ListObjectRequiredProps } from 'common/Interfaces';
import * as S from './ButtonGroup.styled';

export type ButtonGroupButton<T> = {
  content: T;
  selected: boolean;
} & ListObjectRequiredProps<number | string>;

export type ButtonGroupProps<T = ReactNode> = {
  buttons: ButtonGroupButton<T>[];
  onButtonClick?: (button: ButtonGroupButton<T>) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props: ButtonGroupProps, ref) => {
    const {
      buttons,
      onButtonClick,
      ...passThrough
    } = props;

    const handleClickButton = useCallback((btn: ButtonGroupButton<ReactNode>) => () => {
      onButtonClick?.(btn);
    }, [onButtonClick]);

    return (
      <S.ButtonGroup
        ref={ref}
        {...passThrough}
      >
        {buttons.map((btn) => {
          const { id, content, selected } = btn;

          return (
            <S.Button
              key={id}
              selected={selected}
              onClick={handleClickButton(btn)}
            >
              {content}
            </S.Button>
          );
        })}
      </S.ButtonGroup>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = {
  onButtonClick: undefined,
};

export default ButtonGroup;
