import PropTypes from "prop-types";
import React, { memo } from "react";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";

// Reusable Image Component for the Gallery
const GalleryImage = ({ webpSrc, fallbackSrc, alt }) => (
  <ResponsiveImage
    webpSrc={webpSrc}
    fallbackSrc={fallbackSrc}
    alt={alt}
    width="100%"
    height="100%"
    className="modal-gallery-imgs"
    lazyLoading={false}
  />
);

GalleryImage.propTypes = {
  webpSrc: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default memo(GalleryImage);
