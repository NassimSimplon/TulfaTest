import "./StickySection.css";
import BannerSection from "../../Components/BannerSection";
import FurnitureSection from "../../Components/FurnitureSection";
import PropTypes from "prop-types";
import VideoSection from "../../Components/VideoSection";
import { memo } from "react";

const StickySection = ({handleError, handleLoadedData}) => {
  return (
    <div className="StickySection">
      <VideoSection handleError={handleError} handleLoadedData={handleLoadedData} />
      <BannerSection />
      <FurnitureSection />
    </div>
  );
};
StickySection.propTypes = {
  handleLoadedData:PropTypes.func,
  handleError:PropTypes.func
};
export default memo(StickySection);
