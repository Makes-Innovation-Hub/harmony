import React from "react";
import { images } from "../../assets/imageManager.js";

const Image = ({ name, alt, styles: StyledWrapper, onClick }) => {
  const src = images[name];

  const ImageContent = <img src={src} alt={alt} onClick={onClick} />;

  if (StyledWrapper) {
    return <StyledWrapper src={src} alt={alt} onClick={onClick} />;
  }

  return ImageContent;
};

export default React.memo(Image);
