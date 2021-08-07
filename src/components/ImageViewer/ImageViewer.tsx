import IconButton from 'components/IconButton';
import styled, { css } from 'styled-components';
import { cvar } from 'utils';
import { Times } from 'components/Icons';
import React, {
  ImgHTMLAttributes, useState, forwardRef,
} from 'react';

export interface ImageViewerProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image = styled.img<ImageViewerProps>`
  border-radius: ${cvar('--control-border-radius')};
`;

interface ImageContainerProps {
  maximize: boolean;
}

const ImageContainer = styled.div<ImageContainerProps>`
  cursor: pointer;
  display: inline-block;
  height: calc(100% - 20px);

  ${(props) => props.maximize && css`
    cursor: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;

    ${Image}{
      max-height: 100vh;
      max-width: 100%;
    }
  `}
`;

const CloseIcon = styled(IconButton)`
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const TimesIcon = styled(Times)`
  font-size: 1.25rem;
`;

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
      <ImageContainer
        ref={ref}
        maximize={maximize}
        onClick={handleOnClickImageContainer}
      >
        {maximize && (
          <CloseIcon onClick={handleOnClickCloseIcon}>
            <TimesIcon />
          </CloseIcon>
        )}
        <Image {...props} />
      </ImageContainer>
    );
  },
);

ImageViewer.displayName = 'ImageViewer';

export default ImageViewer;
