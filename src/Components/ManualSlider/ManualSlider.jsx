import "./ManualSlider.css";
import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";

const ManualSlider = ({
  imagesWebp,
  images,
  goToImage,
  currentIndex,
  showButtons = false,
}) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [currentIndex]);

  return (
    <div className="manualSlider-container">
      <div className="image-manualSlider">
        <ResponsiveImage
          webpSrc={imagesWebp[currentIndex]}
          key={`sofas-s${animationKey}s`}
          fallbackSrc={images[currentIndex]}
          alt={`Sofas image ${currentIndex + 1}`}
          width={"100%"}
          height={"100%"}
          className="slider-image"
          lazyLoading={false}
        />
      </div>
      {showButtons && (
        <div className="button-container">
          <button type="button" onClick={() => goToImage(0)} />
          <button type="button" onClick={() => goToImage(1)} />
          <button type="button" onClick={() => goToImage(2)} />
        </div>
      )}
    </div>
  );
};

//PropTypes Validation
ManualSlider.propTypes = {
  imagesWebp: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  goToImage: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  showButtons: PropTypes.bool,
};

export default memo(ManualSlider);
