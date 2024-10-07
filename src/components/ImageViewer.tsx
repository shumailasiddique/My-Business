// src/components/ImageViewer.tsx

import React from 'react';
import { imageViewerStyles } from '../styles/primatives'; // Adjust the import path based on your structure

interface ImageViewerProps {
    src: string;
    alt: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt }) => {
    return (
        <div style={imageViewerStyles.container}>
            <img src={src} alt={alt} style={imageViewerStyles.image} />
        </div>
    );
};

export default ImageViewer;
