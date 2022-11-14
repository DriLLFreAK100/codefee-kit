import Input from 'components/Input';
import useHasValueChanged from 'hooks/useHasValueChanged';
import { EasyTime, Time } from 'utils/TimeHelper';
import React, {
  ChangeEvent,
  forwardRef,
  HtmlHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { getTimeFromStr, isValidTime } from './Common';
import Picker from './Picker';
import * as S from './TimePicker.styled';

export type TimePickerProps = {
  time?: Time;
  placeholder?: string;
  onTimeChange?: (time?: Time) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  (props: TimePickerProps, ref) => {
    const { time, placeholder, onTimeChange, ...passThrough } = props;

    const [open, setOpen] = useState(false);
    const [selectedTime, setSelectedTime] =
      useState<EasyTime | undefined>(undefined);
    const [inputValue, setInputValue] = useState('');
    const isTouched = useHasValueChanged(inputValue);

    const closeTimeSelector = () => setOpen(false);

    const updateTime = (value?: Time) => {
      if (value) {
        const value$ = new EasyTime(value);
        setSelectedTime(value$);
        setInputValue(value$.format());
        return;
      }

      setSelectedTime(undefined);
      setInputValue('');
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
    };

    const handleInputBlur = () => {
      const value = getTimeFromStr(inputValue);

      if (value) {
        onTimeChange?.(value);
        return;
      }

      onTimeChange?.(undefined);
    };

    const handleTimeChange = (value: Time) => updateTime(value);

    const handleMinuteChange = (value: Time) => updateTime(value);

    const handleClickOutside = () => {
      // Revert internal states to initial states
      updateTime(time);
      closeTimeSelector();
    };

    const handleClickOk = () => {
      onTimeChange?.(selectedTime?.value);
      closeTimeSelector();
    };

    useEffect(() => updateTime(time), [time]);

    return (
      <Picker
        ref={ref}
        open={open}
        input={
          <Input
            placeholder={placeholder}
            value={inputValue}
            error={isTouched && !isValidTime(inputValue)}
            onFocus={closeTimeSelector}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        }
        selector={
          <S.TimeSelector
            inputVariant="clock"
            time={selectedTime?.value}
            onTimeChange={handleTimeChange}
            onMinuteChange={handleMinuteChange}
          />
        }
        icon={<S.ClockIcon />}
        hasFooterControls
        setOpen={setOpen}
        onOk={handleClickOk}
        onCancel={handleClickOutside}
        onClose={handleClickOutside}
        {...passThrough}
      />
    );
  }
);

TimePicker.displayName = 'TimePicker';
TimePicker.defaultProps = {
  time: undefined,
  placeholder: 'hh:mm (am|pm)',
  onTimeChange: undefined,
};

export default TimePicker;
