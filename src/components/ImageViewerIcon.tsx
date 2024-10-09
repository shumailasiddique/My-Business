import { FunctionComponent } from "react";
import styled from "styled-components";

export type ImageViewerIconType = {
  className?: string;
};

const ImageviewerIconRoot = styled.img`
  width: 391.8px;
  position: relative;
  border-radius: var(--large);
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
`;

const ImageViewerIcon: FunctionComponent<ImageViewerIconType> = ({
  className = "",
}) => {
  return (
    <ImageviewerIconRoot
      alt=""
      src="/../../public/green-trees.png"
      className={className}
    />
  );
};

export default ImageViewerIcon;
