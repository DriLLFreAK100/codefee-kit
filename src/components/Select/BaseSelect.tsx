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

export interface BaseSelectProps {
  open: boolean;
  optionNodes: ReactNode;
  selectedDisplay: ReactNode;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const BaseSelect = forwardRef(
  (props: BaseSelectProps, ref) => {
    const {
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
      <S.Host ref={hostRef}>
        <S.Select onClick={handleOnClickSelect}>
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

BaseSelect.displayName = 'BaseSelect';

export default BaseSelect;
