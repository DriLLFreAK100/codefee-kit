import React, { FC } from 'react';
import StringHelper from 'utils/StringHelper';
import styles from './CircularProgress.module.scss';

interface CircularProgressProps {
  color?: 'primary' | 'secondary';
  progress?: number;
  type?: 'determinate' | 'indeterminate';
}

const radius = 20.2;
const circumference = 2 * Math.PI * radius;

const CircularProgress: FC<CircularProgressProps> = ({
  color,
  progress,
  type,
}: CircularProgressProps) => {
  const determinateStyle = {
    strokeDasharray: circumference,
    strokeDashoffset: `${circumference - (((progress as number) / 100) * circumference)}`,
  };

  const circularProgressClassName = StringHelper.flatten(`
    ${styles['circularProgress']} 
    ${styles[`circularProgress--${type}`]}
  `);

  const circleClassName = StringHelper.flatten(`
    ${styles[`circularProgress__svg--${color}`]} 
    ${styles[`circularProgress__svg--${type}`]}
  `);

  return (
    <div className={circularProgressClassName}>
      <svg className={styles['circularProgress__svg']} viewBox="22 22 44 44">
        <circle
          className={circleClassName}
          style={determinateStyle}
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          strokeWidth="3.6"
        />
      </svg>
    </div>
  );
};

CircularProgress.displayName = 'CircularProgress';
CircularProgress.defaultProps = {
  color: 'primary',
  progress: 0,
  type: 'indeterminate',
};

export {
  CircularProgress,
  CircularProgressProps,
};
