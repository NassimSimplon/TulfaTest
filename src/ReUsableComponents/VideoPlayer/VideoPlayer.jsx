import PropTypes from "prop-types";
import React from "react";

const VideoPlayer = ({
  src,
  type,
  autoPlay,
  loop,
  muted,
  playsInline,
  className,
}) => {
  return (
    <video
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      className={className}
    >
      <source src={src} type={type} />
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
};

// Default props
VideoPlayer.defaultProps = {
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  className: "video-loader",
};

export default VideoPlayer;
