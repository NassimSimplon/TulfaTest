import "./OutroSection.css";
import AutoSlider from "../AutoSlider/AutoSlider";
import useScrollTrigger from "../../CustomHooks/useScrollTrigger";

const OutroSection = () => {
  const Intro = useScrollTrigger(0.1);

  return (
    <section id="OutroSection" ref={Intro.ref}>
      <div className="text-content">
        <h1
          className={`  ${
            Intro.isInView ? "OutroSection-title" : "hideAnimation"
          }`}
        >
          We Made It With LOVE
        </h1>
        <h2 className={`  ${Intro.isInView ? "description" : "hideAnimation"}`}>
          At our company, we take pride in having the most skilled and
          experienced experts in the carpentry industry. With a deep passion for
          craftsmanship and attention to detail, our team is dedicated to
          designing and creating high-quality furniture that perfectly blends
          style, durability, and functionality, ensuring you receive nothing but
          the best.
        </h2>
      </div>
      {/* Auto Slider */}
      <div className={`auto-slider-box  `}>
        <AutoSlider />
      </div>
    </section>
  );
};

export default OutroSection;
