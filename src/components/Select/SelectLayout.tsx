import useClickOutside from 'hooks/useClickOutside';
import useExposeRef from 'hooks/useExposeRef';
import React, {
  forwardRef,
  ReactNode,
  useRef,
  useCallback,
  Dispatch,
} from 'react';
import * as S from './Select.style';

export interface SelectLayoutProps {
  className?: string;
  open: boolean;
  optionNodes: ReactNode;
  selectedDisplay: ReactNode;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const SelectLayout = forwardRef(
  (props: SelectLayoutProps, ref) => {
    const {
      className,
      open,
      optionNodes,
      selectedDisplay,
      setOpen,
    } = props;

    const hostRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(() => {
      if (open) {
        setOpen(false);
      }
    }, [open, setOpen]);

    const handleOnClickSelect = (): void => {
      setOpen(!open);
    };

    useClickOutside(hostRef, handleClickOutside);
    useExposeRef(ref, hostRef);

    return (
      <S.Host
        ref={hostRef}
        className={className}
      >
        <S.Select
          open={open}
          onClick={handleOnClickSelect}
        >
          {selectedDisplay}
          <S.AngleIcon open={open} />
        </S.Select>
        <S.OptionContainer open={open}>
          {optionNodes}
        </S.OptionContainer>
      </S.Host>
    );
  },
);

SelectLayout.displayName = 'SelectLayout';
SelectLayout.defaultProps = {
  className: '',
};

export default SelectLayout;
