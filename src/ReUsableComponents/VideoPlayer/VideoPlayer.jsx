import PropTypes from "prop-types";
import React, { memo } from "react";

const VideoPlayer = ({
  src,
  type,
  autoPlay,
  loop,
  muted,
  playsInline,
  className,
  handleError,
  videoRef,
}) => {
  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      className={className}
      onError={handleError}
      key={src}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

// Prop type validation
VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  className: PropTypes.string,
  handleError: PropTypes.func,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

// Default props
VideoPlayer.defaultProps = {
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  className: "video-loader",
};

export default memo(VideoPlayer);
