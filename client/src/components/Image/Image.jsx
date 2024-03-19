import React from "react";
import { images } from "../../assets/imageManager.js";
import { isUrl } from "../../utils/isUrl.js";
import { getEnvironmentName } from "../../utils/envUtils.js";

const Image = ({ name, alt, styles: StyledWrapper, lazy = false, onClick }) => {
  const src = isUrl(name) ? name : images[name];
  if (!src) {
    const env = getEnvironmentName();
    const isDevelopment = env === "development";
    const errorMessage = `Image named ${name} not found`;
    if (isDevelopment) {
      throw new Error(errorMessage);
    } else {
      console.error(errorMessage);
    }
    return null;
  }
  const loadingAttribute = lazy ? "lazy" : "eager";

  const ImageContent = (
    <img src={src} alt={alt} loading={loadingAttribute} onClick={onClick} />
  );

  if (StyledWrapper) {
    return (
      <StyledWrapper
        src={src}
        alt={alt}
        loading={loadingAttribute}
        onClick={onClick}
      />
    );
  }

  return ImageContent;
};

export default React.memo(Image);
