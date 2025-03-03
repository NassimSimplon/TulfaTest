import "./CloserLookModal.css";
import CloseButtonIcon from "../../../assets/CloseButtonIcon";
import PropTypes from "prop-types";
import React, { memo } from "react";
import ResponsiveImage from "../../../ReUsableComponents/ResponsiveImage";

const imageSrc = {
  webp: "https://i.postimg.cc/Wz4trnZ8/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.webp",
  jpg: "https://i.postimg.cc/Cx85jdR3/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg",
};

const CloserLookModal = ({ closeModal }) => (
  <div className="closerLookModal" onClick={closeModal}>
    <div className="closerLookModal-box" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="closerLookModal-button"
        onClick={closeModal}
        aria-label="Close modal"
      >
        <CloseButtonIcon />
      </button>
      <h1 className="closerLookModal-title">
        Ultra-high-definition images of your furniture shot from different
        angles.
      </h1>
      <div className="closerLookModal-image-section">
        {[1, 2].map((_, index) => (
          <div key={index} className="closerLookModal-image-box">
            <ResponsiveImage
              webpSrc={imageSrc.webp}
              fallbackSrc={imageSrc.jpg}
              alt={`show furniture image ${index + 1}`}
              className="closerLookModal-image"
              lazyLoading={false}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

CloserLookModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default memo(CloserLookModal);
