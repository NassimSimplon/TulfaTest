import PropTypes from "prop-types";
import { useCallback, useState } from "react";

// Custom Hook for any manual Slider
const useImageSlider = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToImage = useCallback(
    (index) => {
      if (index >= 0 && index < images.length) {
        setCurrentIndex(index);
      }
    },
    [images.length]
  );
  
  return { currentIndex, goToImage };
};

// PropTypes validation
useImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default useImageSlider;
