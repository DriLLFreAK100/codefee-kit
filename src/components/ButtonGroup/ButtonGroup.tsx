import React, {
  forwardRef,
  HtmlHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  useCallback,
} from 'react';
import * as S from './ButtonGroup.styled';

export type ButtonGroupButton<T> = {
  content: T;
  selected: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonGroupProps<T = ReactNode> = {
  buttons: ButtonGroupButton<T>[];
  onButtonClick?: (button: ButtonGroupButton<T>) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props: ButtonGroupProps, ref) => {
    const { buttons, onButtonClick, ...passThrough } = props;

    const handleClickButton = useCallback(
      (btn: ButtonGroupButton<ReactNode>) => () => {
        onButtonClick?.(btn);
      },
      [onButtonClick]
    );

    return (
      <S.ButtonGroup ref={ref} {...passThrough}>
        {buttons.map((btn) => {
          const { id, content, selected, ...btnAttrs } = btn;

          return (
            <S.Button
              key={id}
              selected={selected}
              onClick={handleClickButton(btn)}
              {...btnAttrs}
            >
              {content}
            </S.Button>
          );
        })}
      </S.ButtonGroup>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = {
  onButtonClick: undefined,
};

export default ButtonGroup;
