import "./RoomDetailsModal.css";
import CloseButtonIcon from "../../../assets/CloseButtonIcon";
import GalleryImage from "../../GalleryImage";
import PropTypes from "prop-types";
import React, { memo } from "react";
import ResponsiveImage from "../../../ReUsableComponents/ResponsiveImage";

const galleryImages = [
  {
    id: 1,
    webpSrc: "https://i.postimg.cc/6pmcByKP/s8ngdbbceb9lck8jhvin.webp",
    fallbackSrc: "https://i.postimg.cc/Kv5shGRX/Frame1.png",
    alt: "Modern Scandinavian Yellow Sofa 1",
  },
  {
    id: 2,
    webpSrc: "https://i.postimg.cc/8kmbjyDM/demby1ozhujjglovlnhr.webp",
    fallbackSrc: "https://i.postimg.cc/K8vpZ6M1/Frame2.png",
    alt: "Modern Scandinavian Yellow Sofa 2",
  },
  {
    id: 3,
    webpSrc: "https://i.postimg.cc/4yPvq3wB/gjh3qkxpaevocprik5le.webp",
    fallbackSrc: "https://i.postimg.cc/DzSCG15F/Frame3.png",
    alt: "Modern Scandinavian Yellow Sofa 3",
  },
  {
    id: 4,
    webpSrc: "https://i.postimg.cc/28HFxV15/bqqxeyih6p5ppzxbtzzh.webp",
    fallbackSrc: "https://i.postimg.cc/cL996FRX/Frame4.png",
    alt: "Modern Scandinavian Yellow Sofa 4",
  },
  {
    id: 5,
    webpSrc: "https://i.postimg.cc/MKZmRyK4/nnxijlu0u3d8mki8owid.webp",
    fallbackSrc: "https://i.postimg.cc/66nmzLKp/5.png",
    alt: "Modern Scandinavian Yellow Sofa 5",
  },
  {
    id: 6,
    webpSrc: "https://i.postimg.cc/XJMgympc/ojpkkplrwyej3vtcaoko.webp",
    fallbackSrc: "https://i.postimg.cc/tTVmKFVD/6.png",
    alt: "Modern Scandinavian Yellow Sofa 6",
  },
  {
    id: 6,
    webpSrc: "https://i.postimg.cc/Zqvcn4K5/r510shqjm5bshzw2aswj.webp",
    fallbackSrc: "https://i.postimg.cc/8cQnNsRG/7.png",
    alt: "Modern Scandinavian Yellow Sofa 7",
  },
  {
    id: 7,
    webpSrc: "https://i.postimg.cc/0jPdVSGz/heghfzvp4r5xmxvdztgi.webp",
    fallbackSrc: "https://i.postimg.cc/CL062BMH/8.png",
    alt: "Modern Scandinavian Yellow Sofa 8",
  },
];

const RoomDetailsModal = ({ closeModal }) => {
  return (
    <div className="RoomDetailsModal" onClick={closeModal}>
      <div
        className="RoomDetailsModal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-button"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <CloseButtonIcon />
        </button>
        <div className="main-image-box">
          <ResponsiveImage
            fallbackSrc="https://i.postimg.cc/1zbvr4YF/Frame-71.png"
            webpSrc="https://i.postimg.cc/2647dGWp/pi1wlacq6pniv5sl9prx.webp"
            alt="Modern Scandinavian Yellow Sofa"
            width="100%"
            height="100%"
            className="main-image"
            lazyLoading={false}
          />
        </div>
        <h1 className="Modal-Description">
          Lorem ipsum dolor sit amet consectetur. Morbi id eget elementum
          ornare.
        </h1>
        <div className="modal-gallery">
          {galleryImages.map((image) => (
            <GalleryImage key={image.id} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Prop type validation
RoomDetailsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default memo(RoomDetailsModal);
