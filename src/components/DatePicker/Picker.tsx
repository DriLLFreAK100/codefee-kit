import useClickOutside from 'hooks/useClickOutside';
import useExposeRef from 'hooks/useExposeRef';
import { Calendar } from 'components/Icons';
import React, {
  forwardRef, HtmlHTMLAttributes, ReactNode, useRef,
} from 'react';
import * as S from './DatePicker.styled';

export type PickerProps = {
  isSelectorOpen: boolean;
  onOpenSelector: () => void;
  onCloseSelector: () => void;
  renderInput: () => ReactNode;
  renderSelector: () => ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Picker = forwardRef<HTMLDivElement, PickerProps>(
  (props: PickerProps, ref) => {
    const {
      isSelectorOpen,
      onOpenSelector,
      onCloseSelector,
      renderInput,
      renderSelector,
      ...passThrough
    } = props;

    const hostRef = useRef<HTMLDivElement>(null);

    useExposeRef(ref, hostRef);
    useClickOutside(hostRef, onCloseSelector);

    return (
      <S.DatePicker
        ref={ref}
        {...passThrough}
      >
        <S.InputGroup>
          {renderInput()}
          <S.CalendarButton onClick={onOpenSelector}>
            <Calendar />
          </S.CalendarButton>
        </S.InputGroup>

        {isSelectorOpen && renderSelector()}
      </S.DatePicker>
    );
  },
);

Picker.displayName = 'Picker';
export default Picker;
