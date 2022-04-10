import useClickOutside from 'hooks/useClickOutside';
import React, {
  forwardRef, HtmlHTMLAttributes, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { DialogVariant } from './Common';
import * as S from './Dialog.styled';

export type DialogProps = {
  isOpen: boolean;
  isMandatory?: boolean;
  variant?: DialogVariant;
  onClose: () => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const modalRootId = 'cf-modal-root';

const tryCreateModalRoot = () => {
  const root = document.getElementById(modalRootId);

  if (!root) {
    const el = document.createElement('div');
    el.id = modalRootId;
    document.body.append(el);
    return el;
  }

  return root;
};

const withTimeout = (func: () => void) => {
  setTimeout(() => func(), 150);
};

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (props: DialogProps, ref) => {
    const {
      isOpen,
      isMandatory,
      variant,
      onClose,
      children,
      ...passThrough
    } = props;

    const modalRootEl = useRef<Element>();
    const contentEl = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [isOpenInternal, setIsOpenInternal] = useState(false);
    const track = useRef(isOpen);

    const handleOnClose = () => {
      setIsActive(false);
      withTimeout(() => onClose());
    };

    useLayoutEffect(() => {
      modalRootEl.current = tryCreateModalRoot();
    }, []);

    useEffect(() => {
      track.current = isOpen;

      if (isOpen) {
        setIsOpenInternal(true);
        setTimeout(() => setIsActive(true), 20);
      } else {
        setIsActive(false);
        withTimeout(() => !track.current && setIsOpenInternal(false));
      }
    }, [isOpen]);

    useClickOutside(contentEl, () => !isMandatory && isOpen && handleOnClose());

    return modalRootEl.current && isOpenInternal ? createPortal(
      <S.Dialog
        ref={ref}
        isActive={isActive}
        {...passThrough}
      >
        <S.Overlay />
        <S.ContentContainer>
          <S.Content
            ref={contentEl}
            variant={variant as DialogVariant}
          >
            {children}
          </S.Content>
        </S.ContentContainer>
      </S.Dialog>,
      modalRootEl.current,
    ) : <></>;
  },
);

Dialog.displayName = 'Dialog';
Dialog.defaultProps = {
  isMandatory: false,
  variant: 'default',
};

export default Dialog;
