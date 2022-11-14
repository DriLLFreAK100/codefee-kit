import useClickOutside from 'hooks/useClickOutside';
import useExposeRef from 'hooks/useExposeRef';
import React, {
  Dispatch,
  forwardRef,
  HtmlHTMLAttributes,
  ReactNode,
  useRef,
} from 'react';
import * as S from './Picker.styled';

export type PickerProps = {
  open: boolean;
  input: ReactNode;
  selector: ReactNode;
  icon: ReactNode;
  hasFooterControls?: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Picker = forwardRef<HTMLDivElement, PickerProps>(
  (props: PickerProps, ref) => {
    const {
      open,
      input,
      selector,
      icon,
      hasFooterControls,
      setOpen,
      onOk,
      onCancel,
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

    const handleOk = () => onOk?.();

    const handleCancel = () => onCancel?.();

    useExposeRef(ref, hostRef);
    useClickOutside(hostRef, closeSelector);

    return (
      <S.Picker ref={hostRef} {...passThrough}>
        <S.InputGroup>
          {input}
          <S.IconButton type="button" onClick={openSelector}>
            {icon}
          </S.IconButton>
        </S.InputGroup>

        {open && (
          <S.Selector>
            {selector}

            {hasFooterControls && (
              <S.Controls>
                <S.CtrlButton
                  type="button"
                  variant="lite"
                  onClick={handleCancel}
                >
                  Cancel
                </S.CtrlButton>
                <S.CtrlButton type="button" variant="lite" onClick={handleOk}>
                  OK
                </S.CtrlButton>
              </S.Controls>
            )}
          </S.Selector>
        )}
      </S.Picker>
    );
  }
);

Picker.displayName = 'Picker';
Picker.defaultProps = {
  hasFooterControls: false,
  onClose: undefined,
  onOk: undefined,
  onCancel: undefined,
};

export default Picker;
