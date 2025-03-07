import LazyLoader from "../HOC/LazyLoader";

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
