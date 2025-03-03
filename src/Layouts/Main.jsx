import CustomizedSofas from "../Components/CustomizedSofas";
import OutroSection from "../Components/OutroSection";
import PropTypes from "prop-types";
import SizeOfFurnitureSection from "../Components/SizeOfFurnitureSection";
import StickySection from "./StickySection/StickySection";
import WorkPresentation from "../Components/WorkPresentation";
import { memo } from "react";

const Main = ({ handleError, handleLoadedData }) => {
  return (
    <main>
      <StickySection
        handleError={handleError}
        handleLoadedData={handleLoadedData}
      />
      <SizeOfFurnitureSection />
      <CustomizedSofas />
      <WorkPresentation />
      <OutroSection />
    </main>
  );
};
Main.propTypes = {
  handleLoadedData: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
};
export default memo(Main);
