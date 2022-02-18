import React, { forwardRef, ImgHTMLAttributes, useState } from 'react';
import * as S from './ImageViewer.styled';

export interface ImageViewerProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const ImageViewer = forwardRef<HTMLDivElement, ImageViewerProps>(
  (props: ImageViewerProps, ref) => {
    const [maximize, setMaximize] = useState(false);

    const handleOnClickImageContainer = (): void => {
      if (!maximize) {
        setMaximize(true);
      }
    };

    const handleOnClickCloseIcon = (): void => {
      setMaximize(false);
    };

    return (
      <S.ImageContainer
        ref={ref}
        maximize={maximize}
        onClick={handleOnClickImageContainer}
      >
        {maximize && (
          <S.CloseIconButton onClick={handleOnClickCloseIcon}>
            <S.TimesIcon />
          </S.CloseIconButton>
        )}
        <S.Image {...props} />
      </S.ImageContainer>
    );
  },
);

ImageViewer.displayName = 'ImageViewer';

export default ImageViewer;
