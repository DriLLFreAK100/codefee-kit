import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss';
import useWindowSize from 'hooks/useWindowSize';
import { SizeType } from 'Common/Types';

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

interface IGrid {
  children?: ReactNode;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}

const guard = (...sizes: (number | undefined)[]): void => {
  if (sizes.every((size) => !size)) {
    throw new Error('Must at least define one size for the Grid');
  }
  if (sizes.some((size) => size && size > 12)) {
    throw new Error('Grid size value must be within 1 - 12');
  }
};

const getDefinedValue = (
  index: number,
  sizes: { sizeType: SizeType, value?: number }[],
): number => {
  if (index < 0) return 1;
  if (sizes[index].value) return sizes[index].value as number;
  return getDefinedValue(index - 1, sizes);
};

const getFlexSize = (target: SizeType, sizes: { sizeType: SizeType, value?: number }[]) => {
  const result: CSSProperties = {};

  switch (target) {
    case 'xs':
      result.flexGrow = getDefinedValue(0, sizes);
      break;
    case 'sm':
      result.flexGrow = getDefinedValue(1, sizes);
      break;
    case 'md':
      result.flexGrow = getDefinedValue(2, sizes);
      break;
    case 'lg':
      result.flexGrow = getDefinedValue(3, sizes);
      break;
    case 'xl':
      result.flexGrow = getDefinedValue(4, sizes);
      break;
    default:
      break;
  }

  return result;
};

const Grid: FunctionComponent<IGrid> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
}: IGrid) => {
  guard(xs, sm, md, lg, xl);
  const { size } = useWindowSize();
  let computedStyle: CSSProperties = {};

  if (size) {
    computedStyle = {
      ...getFlexSize(size, [
        { sizeType: 'xs', value: xs },
        { sizeType: 'sm', value: sm },
        { sizeType: 'md', value: md },
        { sizeType: 'lg', value: lg },
        { sizeType: 'xl', value: xl },
      ]),
    };
  }

  return (
    <div className={styles['grid']} style={computedStyle}>
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';
Grid.defaultProps = {
  children: null,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};
export default Grid;
