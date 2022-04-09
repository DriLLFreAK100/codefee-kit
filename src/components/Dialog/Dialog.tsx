import useClickOutside from 'hooks/useClickOutside';
import React, {
  forwardRef, HtmlHTMLAttributes, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { DialogVariant } from './Common';
import * as S from './Dialog.styled';

export type DialogProps = {
  isOpen: boolean;
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
      variant,
      onClose,
      children,
      ...passThrough
    } = props;

    const modalRootEl = useRef<Element>();
    const contentEl = useRef<HTMLDivElement>(null);
    const [isOpenInternal, setIsOpenInternal] = useState(false);

    const handleOnClose = () => {
      setIsOpenInternal(false);
      withTimeout(() => onClose());
    };

    useLayoutEffect(() => {
      modalRootEl.current = tryCreateModalRoot();
    }, []);

    useEffect(() => withTimeout(() => setIsOpenInternal(isOpen)), [isOpen]);

    useClickOutside(contentEl, () => isOpen && handleOnClose());

    return modalRootEl.current && isOpen ? createPortal(
      <S.Dialog
        ref={ref}
        isActive={isOpenInternal}
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
  variant: 'default',
};

export default Dialog;
