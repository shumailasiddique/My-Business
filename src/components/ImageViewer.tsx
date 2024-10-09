import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
 height: 100vh;
  width: 50%; /* 50% width for the left section */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
  position: absolute;
  height: calc(100% - 53px);
  width: 29.93%;
  top: 24px;
  right: 68.32%;
  bottom: 29px;
  left: 1.75%;
  border-radius: var(--large);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  }
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0; // Ensure no padding or margins around the image
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
