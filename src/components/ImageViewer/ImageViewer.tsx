import Figure, { FigureProps } from 'components/Figure';
import React, { FC, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { cvar } from 'utils';

type ImageViewerBaseType = ImgHTMLAttributes<HTMLImageElement> & FigureProps;
export interface ImageViewerProps extends ImageViewerBaseType {
  src: string;
  alt: string;
}

const StyledImg = styled.img<ImageViewerProps>`
  border-radius: ${cvar('--control-border-radius')};
`;

const ImageViewer: FC<ImageViewerProps> = (props: ImageViewerProps) => {
  const {
    caption,
    gutter,
  } = props;

  return (
    <Figure caption={caption} gutter={gutter}>
      <StyledImg {...props} />
    </Figure>
  );
};

ImageViewer.displayName = 'ImageViewer';
ImageViewer.defaultProps = {
  caption: undefined,
};

export default ImageViewer;
