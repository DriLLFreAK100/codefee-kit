import useClickOutside from 'hooks/useClickOutside';
import useExposeRef from 'hooks/useExposeRef';
import { Calendar } from 'components/Icons';
import React, {
  Dispatch, forwardRef, HtmlHTMLAttributes, ReactNode, useRef,
} from 'react';
import * as S from './Picker.styled';

export type PickerProps = {
  open: boolean;
  renderInput: () => ReactNode;
  renderSelector: () => ReactNode;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Picker = forwardRef<HTMLDivElement, PickerProps>(
  (props: PickerProps, ref) => {
    const {
      open,
      renderInput,
      renderSelector,
      setOpen,
      ...passThrough
    } = props;

    const hostRef = useRef<HTMLDivElement>(null);

    const closeSelector = () => setOpen(false);
    const openSelector = () => setOpen(true);

    useExposeRef(ref, hostRef);
    useClickOutside(hostRef, closeSelector);

    return (
      <S.Picker
        ref={hostRef}
        {...passThrough}
      >
        <S.InputGroup>
          {renderInput()}
          <S.CalendarButton onClick={openSelector}>
            <Calendar />
          </S.CalendarButton>
        </S.InputGroup>

        {open && renderSelector()}
      </S.Picker>
    );
  },
);

Picker.displayName = 'Picker';
export default Picker;
