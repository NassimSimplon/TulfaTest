import "./WorkCard.css";
import PropTypes from "prop-types";
import React, { memo } from "react";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";

const WorkCard = ({ id, webpSrc, fallbackSrc, alt, onOpenModal }) => {
  return (
    <div key={id} className="img-box">
      <ResponsiveImage
        key={id}
        webpSrc={webpSrc}
        fallbackSrc={fallbackSrc}
        alt={alt}
        width="100%"
        height="100%"
        className="grid-item grid-item-1"
        lazyLoading={false}
      />
      <button className="transparent-box" type="button" onClick={onOpenModal}>
        <div className="caption">
          <p>Explore Now !</p>
        </div>
      </button>
    </div>
  );
};

WorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  webpSrc: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired, 
};

export default memo(WorkCard);
