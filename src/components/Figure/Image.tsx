import React, { FC, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { cvar } from 'utils';

export type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

const StyledImg = styled.img<ImgProps>`
  border-radius: ${cvar('--control-border-radius')};
`;

const Image: FC<ImgProps> = (props) => <StyledImg {...props} />;

export default Image;
