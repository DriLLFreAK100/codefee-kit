import Figure, { FigureProps } from 'components/Figure';
import IconButton from 'components/IconButton';
import styled, { css } from 'styled-components';
import { cvar } from 'utils';
import { Times } from 'components/Icons';
import React, {
  FC, ImgHTMLAttributes, useState, useCallback,
} from 'react';

type ImageViewerBaseType = ImgHTMLAttributes<HTMLImageElement> & FigureProps;

export interface ImageViewerProps extends ImageViewerBaseType {
  src: string;
  alt: string;
}

const StyledFigure = styled(Figure)`
  height: 100%;
`;

const Image = styled.img<ImageViewerProps>`
  border-radius: ${cvar('--control-border-radius')};
  height: 100%;
`;

interface ImageContainerProps {
  maximize: boolean;
}

const ImageContainer = styled.div<ImageContainerProps>`
  cursor: pointer;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: calc(100% - 20px);

  ${(props) => props.maximize && css`
    cursor: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

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

const ImageViewer: FC<ImageViewerProps> = (props: ImageViewerProps) => {
  const {
    caption,
    gutter,
  } = props;

  const [maximize, setMaximize] = useState(false);

  const handleOnClickImageContainer = useCallback((): void => {
    if (!maximize) {
      setMaximize(true);
    }
  }, [maximize]);

  const handleOnClickCloseIcon = useCallback((): void => {
    setMaximize(false);
  }, []);

  return (
    <StyledFigure
      caption={caption}
      gutter={gutter}
    >
      <ImageContainer
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
    </StyledFigure>
  );
};

ImageViewer.displayName = 'ImageViewer';
ImageViewer.defaultProps = {
  caption: undefined,
};

export default ImageViewer;
