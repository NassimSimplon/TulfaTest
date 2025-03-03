import "./StickySection.css";
import BannerSection from "../../Components/BannerSection";
import FurnitureSection from "../../Components/FurnitureSection";
import VideoSection from "../../Components/VideoSection";

const StickySection = () => {
  return (
    <div className="StickySection">
      <VideoSection />
      <BannerSection />
      <FurnitureSection />
    </div>
  );
};

export default StickySection;
