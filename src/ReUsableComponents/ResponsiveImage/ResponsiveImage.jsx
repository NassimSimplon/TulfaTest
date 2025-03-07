import "./ResponsiveImage.css";
import AnimLogo from "../../assets/AnimLogo";
import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";

// ResponsiveImage Component
const ResponsiveImage = ({
  webpSrc,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  lazyLoading,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  //Check the image Load
  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />

      {(hasError || !isLoaded) && (
        <div className="loaderItem">
          <AnimLogo />
        </div>
      )}
      <img
        style={style}
        src={fallbackSrc}
        alt={alt}
        loading={lazyLoading ? "lazy" : "eager"}
        width={width}
        height={height}
        className={`${isLoaded && !hasError ? "block" : "none"} ${className}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        crossOrigin="anonymous"
      />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  webpSrc: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  lazyLoading: PropTypes.bool,
  style: PropTypes.object,
};

ResponsiveImage.defaultProps = {
  width: "100%",
  height: "100%",
  className: "",
  lazyLoading: true,
};

export default memo(ResponsiveImage);
