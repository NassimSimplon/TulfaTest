import "./FurnitureSection.css";
import CloserLookModal from "../Modals/CloserLookModal";
import PlusIcon from "../../assets/PlusIcon";
import React from "react";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";
import useModal from "../../CustomHooks/useModal";
import useScrollTrigger from "../../CustomHooks/useScrollTrigger";

//Images
const imageSrc = {
  webp: "https://i.postimg.cc/Wz4trnZ8/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.webp",
  jpg: "https://i.postimg.cc/Cx85jdR3/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg",
};
const FurnitureSection = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const furniture = useScrollTrigger(0.1);

  return (
    <div className="FurnitureSection" ref={furniture.ref}>
      {isOpen && <CloserLookModal closeModal={closeModal} />}
      <div
        className={`  ${
          furniture.isInView ? "FurnitureSection-content" : "hideAnimation"
        }`}
      >
        <h1 className="furnitureSection-title">Product Silos</h1>
        <button
          className="FurnitureSection-btn"
          type="button"
          onClick={openModal}
        >
          <PlusIcon /> Take a Closer Look
        </button>
      </div>
      <div
        className={`  ${
          furniture.isInView ? "furniture-image-section" : "hideAnimation"
        }`}
      >
        <ResponsiveImage
          webpSrc={imageSrc.webp}
          fallbackSrc={imageSrc.jpg}
          alt="furniture"
          className="furniture-image"
        />
      </div>
    </div>
  );
};

export default FurnitureSection;
