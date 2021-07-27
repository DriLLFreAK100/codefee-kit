import Figure, { FigureProps } from 'components/Figure';
import React, { FC, ImgHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import { cvar } from 'utils';

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

const ImageViewer: FC<ImageViewerProps> = (props: ImageViewerProps) => {
  const {
    caption,
    gutter,
  } = props;

  const [maximize, setMaximize] = useState(false);

  const handleOnClick = (): void => {
    setMaximize(!maximize);
  };

  return (
    <StyledFigure caption={caption} gutter={gutter}>
      <ImageContainer maximize={maximize} onClick={handleOnClick}>
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
