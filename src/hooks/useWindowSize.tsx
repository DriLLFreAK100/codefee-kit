import { SizeType } from 'common/Types';
import { useEffect, useState } from 'react';

interface WindowSize {
  width?: number;
  height?: number;
}

const getDeviceSize = (windowSize: number): SizeType => {
  if (windowSize < 576) {
    return 'xs';
  }

  if (windowSize >= 576 && windowSize < 768) {
    return 'sm';
  }

  if (windowSize >= 768 && windowSize < 992) {
    return 'md';
  }

  if (windowSize >= 992 && windowSize < 1200) {
    return 'lg';
  }

  return 'xl';
};

/**
 * Return window size information and screen SizeType
 * @returns Window sizes and types
 */
const useWindowSize = (): {
  width?: number
  height?: number;
  size?: SizeType;
} => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowSize,
    size: (windowSize.width && getDeviceSize(windowSize.width)) || undefined,
  };
};

export default useWindowSize;
