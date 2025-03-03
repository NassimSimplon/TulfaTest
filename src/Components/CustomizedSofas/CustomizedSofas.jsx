import "./CustomizedSofas.css";
import ManualSlider from "../ManualSlider";
import useScrollTrigger from "../../CustomHooks/useScrollTrigger";

const CustomizedSofas = () => {
  const customSofa = useScrollTrigger(0.3);

  return (
    <section className="CustomizedSofas" ref={customSofa.ref}>
      <h1
        className={`${
          customSofa.isInView ? "CustomizedSofas-title" : "hideAnimation"
        }`}
      >
        Customize your furniture
      </h1>
      <div
        className={`  ${
          customSofa.isInView ? "slider-manual-box" : "hideAnimation"
        }`}
      >
        <ManualSlider />
      </div>
    </section>
  );
};

export default CustomizedSofas;
