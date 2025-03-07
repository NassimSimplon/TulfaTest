import "./StickySection.css";
import LazyLoader from "../../HOC/LazyLoader";
import VideoSection from "../../Components/VideoSection";

// Lazy load child components
const BannerSection = LazyLoader(() =>
  import("../../Components/BannerSection")
);
const FurnitureSection = LazyLoader(() =>
  import("../../Components/FurnitureSection")
);
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
