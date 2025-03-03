import "./SizeOfFurnitureSection.css";
import React from "react";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";
import useScrollTrigger from "../../CustomHooks/useScrollTrigger";

const SizeOfFurnitureSection = () => {
  const sizeOfFurniture = useScrollTrigger(0.3);
  return (
    <div className="SizeOfFurnitureSection" ref={sizeOfFurniture.ref}>
      <div
        className={`${
          sizeOfFurniture.isInView
            ? "SizeOfFurnitureSection-image-section"
            : "hideAnimation"
        }`}
      >
        <ResponsiveImage
          webpSrc={"https://i.postimg.cc/C5cj37kn/Size-Var-1.webp"}
          fallbackSrc={"https://i.postimg.cc/8k4Bfp9k/Size-Var-1.png"}
          alt="wood furniture image"
          width={"auto"}
          height={"auto"}
          className={"SizeOfFurnitureSection-image"}
          lazyLoading={false}
        />
      </div>
      <h1
        className={`${
          sizeOfFurniture.isInView
            ? "SizeOfFurnitureSection-title"
            : "hideAnimation"
        }`}
      >
        Lorem ipsum dolor sit amet
      </h1>
    </div>
  );
};

export default SizeOfFurnitureSection;
