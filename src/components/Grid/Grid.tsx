import useWindowSize from 'hooks/useWindowSize';
import { HorizontalAlignment, SizeType, VerticalAlignment } from 'common/Types';
import { rem } from 'utils/StyleHelper';
import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import * as S from './Grid.styled';

export type GridSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | undefined;

export interface GridProps {
  children?: ReactNode;
  className?: string;
  fullHeight?: boolean;
  style?: CSSProperties;
  xAlign?: HorizontalAlignment;
  yAlign?: VerticalAlignment;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}

const guard = (...sizes: (number | undefined)[]): void => {
  if (sizes.some((size) => size && size > 12)) {
    throw new Error('Grid size value must be within 1 - 12');
  }
};

const getDefinedValue = (
  index: number,
  sizes: { sizeType: SizeType; value?: number }[]
): string => {
  if (index < 0) return '100%';
  if (sizes[index].value)
    return `${((sizes[index].value as number) / 12) * 100}%`;
  return getDefinedValue(index - 1, sizes);
};

const getFlexSize = (
  target: SizeType,
  sizes: {
    sizeType: SizeType;
    value?: number;
  }[]
): CSSProperties => {
  const result: CSSProperties = {};

  switch (target) {
    case 'xs':
      result.flexBasis = getDefinedValue(0, sizes);
      break;
    case 'sm':
      result.flexBasis = getDefinedValue(1, sizes);
      break;
    case 'md':
      result.flexBasis = getDefinedValue(2, sizes);
      break;
    case 'lg':
      result.flexBasis = getDefinedValue(3, sizes);
      break;
    case 'xl':
      result.flexBasis = getDefinedValue(4, sizes);
      break;
    default:
      break;
  }

  return result;
};

const getGutterStyle = (size: SizeType) => {
  const style: CSSProperties = {};
  switch (size) {
    case 'xs':
    case 'sm':
      style.padding = `0 ${rem(8)}`;
      break;
    case 'md':
      style.padding = `0 ${rem(12)}`;
      break;
    case 'lg':
    case 'xl':
      style.padding = `0 ${rem(16)}`;
      break;
    default:
      break;
  }

  return style;
};

const getXAlign = (value?: HorizontalAlignment): CSSProperties => {
  const result: CSSProperties = {};

  switch (value) {
    case 'center':
      result.justifyContent = 'center';
      break;
    case 'right':
      result.justifyContent = 'flex-end';
      result.textAlign = 'right';
      break;
    default:
      break;
  }

  return result;
};

const getYAlign = (value?: VerticalAlignment): CSSProperties => {
  const result: CSSProperties = {};

  switch (value) {
    case 'center':
      result.alignItems = 'center';
      break;
    case 'bottom':
      result.alignItems = 'flex-end';
      break;
    default:
      break;
  }

  return result;
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      className,
      fullHeight,
      style,
      xAlign,
      yAlign,
      xs,
      sm,
      md,
      lg,
      xl,
    }: GridProps,
    ref
  ) => {
    guard(xs, sm, md, lg, xl);
    const { size } = useWindowSize();
    let computedStyle: CSSProperties = { ...style };

    if (fullHeight) computedStyle.height = '100%';

    if (size) {
      computedStyle = {
        ...computedStyle,
        ...getFlexSize(size, [
          { sizeType: 'xs', value: xs },
          { sizeType: 'sm', value: sm },
          { sizeType: 'md', value: md },
          { sizeType: 'lg', value: lg },
          { sizeType: 'xl', value: xl },
        ]),
        ...getXAlign(xAlign),
        ...getYAlign(yAlign),
        ...getGutterStyle(size),
      };
    }

    return (
      <S.Grid ref={ref} className={className} style={computedStyle}>
        {children}
      </S.Grid>
    );
  }
);

Grid.displayName = 'Grid';
Grid.defaultProps = {
  children: null,
  className: '',
  fullHeight: false,
  style: {},
  xAlign: 'left',
  yAlign: 'top',
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

export default Grid;
