import LazyLoader from "../HOC/LazyLoader";
import PropTypes from "prop-types";
import { memo, useEffect } from "react";

// Lazy load child components
const StickySection = LazyLoader(() => import("../Layouts/StickySection"));
const CustomizedSofas = LazyLoader(() =>
  import("../Components/CustomizedSofas")
);
const SizeOfFurnitureSection = LazyLoader(() =>
  import("../Components/SizeOfFurnitureSection")
);
const WorkPresentation = LazyLoader(() =>
  import("../Components/WorkPresentation")
);
const OutroSection = LazyLoader(() => import("../Components/OutroSection"));

const Main = ({ handleError, videoRef, handleLoadedMain }) => {
  useEffect(() => {
    if (handleLoadedMain) {
      handleLoadedMain();
    }
  }, [handleLoadedMain]);
  return (
    <main>
      <StickySection handleError={handleError} videoRef={videoRef} />
      <SizeOfFurnitureSection />
      <CustomizedSofas />
      <WorkPresentation />
      <OutroSection />
    </main>
  );
};
Main.propTypes = {
  handleError: PropTypes.func.isRequired,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  handleLoadedMain: PropTypes.func,
};
export default memo(Main);
