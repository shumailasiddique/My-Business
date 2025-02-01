import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
 height: 100vh;
  width: 100%; /* 50% width for the left section */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  
`;


const Image = styled.img`
  position: absolute;
height: 96vh;
width: 41.8%;
top: 1.5rem;
right: 56.48%;
bottom: 1.813rem;
left: 1.72%;
border-radius: 12px;
max-width: 100%;
overflow: hidden;
max-height: 100%;
object-fit: cover;

`;

interface ImageViewerProps {
  src: "assets/green-trees.jpg";
  alt: "Signin Image";
}


const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageViewer;