import PropTypes from "prop-types";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";
import { memo, useCallback, useRef, useState } from "react";

const ZoomImageComponent = ({
  className,
  zoomScale = 3,
  height,
  width,
  style,
  src,
  transitionTime = 0.1,
  currentIndex,
  alt = "big modern sofa image",
  webSrc,
}) => {
  const ref = useRef(null);
  const [zoom, setZoom] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ x: 50, y: 50 });

  const handleMouseOver = useCallback(() => setZoom(true), []);
  const handleMouseOut = useCallback(() => setZoom(false), []);

  const handleMouseMovement = useCallback(
    (e) => {
      if (!ref.current) return;

      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = (((e.clientX - left) / width) * 100).toFixed(2);
      const y = (((e.clientY - top) / height) * 100).toFixed(2);

      setMouseCoords({ x, y });
    },
    []
  );

  return (
    <div
      className={className}
      style={{
        ...style,
        height,
        width,
        overflow: "hidden",
        position: "relative",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMovement}
      ref={ref}
    >
      <ResponsiveImage
        webpSrc={webSrc[currentIndex]} // Use current image
        fallbackSrc={src[currentIndex]} // Use same as fallback
        alt={`${alt}-${currentIndex}`}
        width={"100%"}
        height={"100%"}
        className="zoomable-image"
        lazyLoading={false}
        style={{
          objectFit: "contain",
          transition: `transform ${transitionTime}s ease-out`,
          transform: zoom ? `scale(${zoomScale})` : "scale(1)",
          transformOrigin: `${mouseCoords.x}% ${mouseCoords.y}%`,
        }}
      />
    </div>
  );
};

ZoomImageComponent.propTypes = {
  className: PropTypes.string,
  zoomScale: PropTypes.number,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  style: PropTypes.object,
  src: PropTypes.arrayOf(PropTypes.string).isRequired,
  transitionTime: PropTypes.number,
  currentIndex: PropTypes.number.isRequired,
  alt: PropTypes.string,
  webSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(ZoomImageComponent);
