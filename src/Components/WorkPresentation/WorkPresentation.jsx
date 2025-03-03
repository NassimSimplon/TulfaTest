import "./WorkPresentation.css";
import React, { Fragment } from "react";
import RoomDetailsModal from "../Modals/RoomDetailsModal";
import WorkCard from "../WorkCard";
import useModal from "../../CustomHooks/useModal";
import useScrollTrigger from "../../CustomHooks/useScrollTrigger";

const cardData = [
  {
    id: 1,
    webpSrc:
      "https://i.postimg.cc/Gpm1k1Rn/empty-space-on-minimal-beautiful-dining-table-in-m-2023-11-27-05-21-36-utc.webp",
    fallbackSrc:
      "https://i.postimg.cc/SRC0yS6C/empty-space-on-minimal-beautiful-dining-table-in-m-2023-11-27-05-21-36-utc.jpg",
    alt: "Modern Room",
  },
  {
    id: 2,
    webpSrc:
      "https://i.postimg.cc/qv8SRsmF/interior-design-of-neutral-living-room-2024-10-18-05-17-30-utc.webp",
    fallbackSrc:
      "https://i.postimg.cc/mkvpZk7R/interior-design-of-neutral-living-room-2024-10-18-05-17-30-utc.jpg",
    alt: "Living Room",
  },
  {
    id: 3,
    webpSrc:
      "https://i.postimg.cc/fTHyts1m/wooden-furniture-in-minimal-dining-room-interior-d-2023-11-27-05-20-43-utc.webp",
    fallbackSrc:
      "https://i.postimg.cc/5N9j2yKf/wooden-furniture-in-minimal-dining-room-interior-d-2023-11-27-05-20-43-utc.jpg",
    alt: "Luxury Living Room",
  },
  {
    id: 4,
    webpSrc:
      "https://i.postimg.cc/L8syD4JD/modern-living-room-with-soft-furniture-2023-11-27-05-04-10-utc.webp",
    fallbackSrc:
      "https://i.postimg.cc/N0BVrKSj/modern-living-room-with-soft-furniture-2023-11-27-05-04-10-utc.jpg",
    alt: "Fancy Living Room",
  },
];

const WorkPresentation = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const work = useScrollTrigger(0.5);

  return (
    <div className="WorkPresentation" ref={work.ref}>
      {/* Room Details Modal */}
      {isOpen && <RoomDetailsModal closeModal={closeModal} />}
      {/* Title of the section */}
      {work.isInView && (
        <Fragment>
          <h1 className="WorkPresentation-title">Some of Our Work</h1>
          <div className="gallery-image">
            {cardData.map(({ id, webpSrc, fallbackSrc, alt }) => (
              <WorkCard
                key={`room-${id}`}
                id={id}
                webpSrc={webpSrc}
                fallbackSrc={fallbackSrc}
                alt={alt}
                onOpenModal={openModal}
              />
            ))}
          </div>{" "}
        </Fragment>
      )}
    </div>
  );
};

export default WorkPresentation;
