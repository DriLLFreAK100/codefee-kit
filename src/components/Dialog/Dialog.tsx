import useClickOutside from 'hooks/useClickOutside';
import React, {
  forwardRef, HtmlHTMLAttributes, useLayoutEffect, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import * as S from './Dialog.styled';

export type DialogProps = {
  isOpen: boolean;
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

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (props: DialogProps, ref) => {
    const {
      isOpen,
      onClose,
      children,
      ...passThrough
    } = props;

    const modalRootEl = useRef<Element>();
    const contentEl = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      modalRootEl.current = tryCreateModalRoot();
    }, []);

    useClickOutside(contentEl, () => isOpen && onClose());

    return modalRootEl.current && isOpen ? createPortal(
      <S.Dialog
        ref={ref}
        {...passThrough}
      >
        <S.Overlay />
        <S.ContentContainer>
          <S.Content ref={contentEl}>
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
};

export default Dialog;
