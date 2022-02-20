import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './DatePicker.styled';

export type DatePickerProps = {
  onDateChange: (date: Date) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props: DatePickerProps, ref) => {
    // const [open, setOpen] = useState(false);

    const handleOnFocus = () => {

    };

    return (
      <>
        <S.DatePicker
          ref={ref}
          onFocus={handleOnFocus}
          {...props}
        />
      </>
    );
  },
);

DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
};

export default DatePicker;
