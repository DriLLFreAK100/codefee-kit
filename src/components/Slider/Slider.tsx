import useExposeRef from 'hooks/useExposeRef';
import React, {
  forwardRef, HtmlHTMLAttributes, DragEvent, MouseEvent, useRef, useEffect, useState, useCallback,
} from 'react';
import * as S from './Slider.style';
import { knobDimension } from './Common';

export type SliderProps = {
  value?: number;
  max?: number;
  onValueChange?: (value: number) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

type RangeValue = {
  min: number;
  max: number;
  value: number;
};

const getRangeValue = (el: HTMLDivElement): RangeValue => {
  const {
    left,
    right,
  } = el.getBoundingClientRect();

  const value = right - left;

  return { min: left, max: right, value };
};

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (props: SliderProps, ref) => {
    const {
      value,
      max,
      onValueChange,
      ...passThrough
    } = props;

    const [knobPosition, setKnobPosition] = useState('0');
    const hostRef = useRef<HTMLDivElement>(null);
    const railRef = useRef<HTMLDivElement>(null);
    useExposeRef(ref, hostRef);

    const progress = `${((value as number) / (max as number)) * 100}%`;

    const computeKnobPosition = useCallback(() => {
      if (hostRef.current) {
        const { value: rangeValue } = getRangeValue(hostRef.current);
        const maxOffset = rangeValue - knobDimension;
        const offset = (value as number * rangeValue) / (max as number);

        setKnobPosition(`${offset > maxOffset ? maxOffset : offset}px`);
      }
    }, [max, value]);

    const handleOnDrag = (e: DragEvent | MouseEvent, isEnd = false) => {
      if (railRef.current) {
        const { value: totalRange, min } = getRangeValue(railRef.current);
        const dragRange = e.clientX - min;
        let dragValue = (dragRange / totalRange) * (max as number);

        if (dragRange < 0 && isEnd) {
          dragValue = 0;
        } else if (dragValue > (max as number)) {
          dragValue = max as number;
        }

        onValueChange?.(dragValue);
      }
    };

    const handleOnDragStart = (e: DragEvent) => {
      e.dataTransfer.setDragImage(new Image(), 0, 0);
      e.dataTransfer.effectAllowed = 'move';
    };

    const handleOnDragEnd = (e: DragEvent) => {
      handleOnDrag(e, true);
    };

    useEffect(() => {
      computeKnobPosition();
    }, [computeKnobPosition]);

    return (
      <S.Slider
        ref={hostRef}
        draggable
        onClick={handleOnDrag}
        onDragStart={handleOnDragStart}
        onDrag={handleOnDrag}
        onDragEnd={handleOnDragEnd}
        {...passThrough}
      >
        <S.Rail ref={railRef} />
        <S.Track style={{ width: progress }} />
        <S.Knob style={{ left: knobPosition }} />
      </S.Slider>
    );
  },
);

Slider.displayName = 'Slider';
Slider.defaultProps = {
  value: 100,
  max: 100,
  onValueChange: undefined,
};

export default Slider;
