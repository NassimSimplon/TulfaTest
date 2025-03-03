import CustomizedSofas from "../Components/CustomizedSofas";
import OutroSection from "../Components/OutroSection";
import SizeOfFurnitureSection from "../Components/SizeOfFurnitureSection";
import StickySection from "./StickySection/StickySection";
import WorkPresentation from "../Components/WorkPresentation";

 

const Main = () => {
  return (
    <main>
      <StickySection />
      <SizeOfFurnitureSection />
      <CustomizedSofas />
      <WorkPresentation />
      <OutroSection />
    </main>
  );
};

export default Main;
