import React, { FC } from 'react';
import styles from './CircularProgress.module.scss';

interface CircularProgressProps {

}

const CircularProgress: FC<CircularProgressProps> = () => {
  return (
    <div className={styles['circularProgress']}>
      Test
    </div>
  );
};

export default CircularProgress;
export type {
  CircularProgressProps,
};
