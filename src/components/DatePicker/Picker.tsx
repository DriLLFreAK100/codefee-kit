import useClickOutside from 'hooks/useClickOutside';
import useExposeRef from 'hooks/useExposeRef';
import React, {
  Dispatch, forwardRef, HtmlHTMLAttributes, ReactNode, useRef,
} from 'react';
import * as S from './Picker.styled';

export type PickerProps = {
  open: boolean;
  input: ReactNode;
  selector: ReactNode;
  icon: ReactNode;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Picker = forwardRef<HTMLDivElement, PickerProps>(
  (props: PickerProps, ref) => {
    const {
      open,
      input,
      selector,
      icon,
      setOpen,
      onClose,
      ...passThrough
    } = props;

    const hostRef = useRef<HTMLDivElement>(null);

    const closeSelector = () => {
      if (open) {
        setOpen(false);
        onClose?.();
      }
    };
    const openSelector = () => setOpen(true);

    useExposeRef(ref, hostRef);
    useClickOutside(hostRef, closeSelector);

    return (
      <S.Picker
        ref={hostRef}
        {...passThrough}
      >
        <S.InputGroup>
          {input}
          <S.CalendarButton
            type="button"
            onClick={openSelector}
          >
            {icon}
          </S.CalendarButton>
        </S.InputGroup>

        {open && selector}
      </S.Picker>
    );
  },
);

Picker.displayName = 'Picker';
Picker.defaultProps = {
  onClose: undefined,
};

export default Picker;
