import "./StickySection.css";
import LazyLoader from "../../HOC/LazyLoader";
import PropTypes from "prop-types";
import VideoSection from "../../Components/VideoSection";
import { memo } from "react";

// Lazy load child components
const BannerSection = LazyLoader(() =>
  import("../../Components/BannerSection")
);
const FurnitureSection = LazyLoader(() =>
  import("../../Components/FurnitureSection")
);
const StickySection = ({ handleError, videoRef }) => {
  return (
    <div className="StickySection">
      <VideoSection videoRef={videoRef} handleError={handleError} />
      <BannerSection />
      <FurnitureSection />
    </div>
  );
};
StickySection.propTypes = {
  handleError: PropTypes.func,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};
export default memo(StickySection);
