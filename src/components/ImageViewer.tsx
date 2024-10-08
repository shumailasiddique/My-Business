import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Image = styled.img`
  width: 411px;
  position: relative;
  border-radius: var(--large);
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  max-width: 100%;
  top:24px;
  left:22px;
  
`;

interface ImageViewerProps {
  src: string;
  alt: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageViewer;
