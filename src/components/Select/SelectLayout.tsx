import Label from 'components/Label';
import useClickOutside from 'hooks/useClickOutside';
import useExposeRef from 'hooks/useExposeRef';
import React, {
  forwardRef,
  ReactNode,
  useRef,
  useCallback,
  Dispatch,
  HtmlHTMLAttributes,
} from 'react';
import * as S from './SelectLayout.styled';

export type SelectLayoutProps = {
  className?: string;
  label?: ReactNode;
  open: boolean;
  optionNodes: ReactNode;
  selectedDisplay: ReactNode;
  onClickOutside?: () => void;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
} & HtmlHTMLAttributes<HTMLDivElement>;

const SelectLayout = forwardRef<HTMLDivElement, SelectLayoutProps>(
  (props: SelectLayoutProps, ref) => {
    const {
      className,
      label,
      open,
      optionNodes,
      selectedDisplay,
      onClickOutside,
      setOpen,
      ...passThrough
    } = props;

    const hostRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(() => {
      onClickOutside?.();

      if (open) {
        setOpen(false);
      }
    }, [open, setOpen, onClickOutside]);

    const handleOnClickSelect = (): void => {
      setOpen(!open);
    };

    useClickOutside(hostRef, handleClickOutside);
    useExposeRef(ref, hostRef);

    return (
      <>
        {label ? <Label htmlFor={passThrough.id}>{label}</Label> : null}

        <S.Host ref={hostRef} className={className} {...passThrough}>
          <S.Select open={open} onClick={handleOnClickSelect}>
            {selectedDisplay}
            <S.AngleIcon open={open} />
          </S.Select>
          <S.OptionContainer open={open}>{optionNodes}</S.OptionContainer>
        </S.Host>
      </>
    );
  }
);

SelectLayout.displayName = 'SelectLayout';
SelectLayout.defaultProps = {
  className: '',
  onClickOutside: undefined,
};

export default SelectLayout;
