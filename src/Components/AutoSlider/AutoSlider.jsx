import "./AutoSlider.css";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";
import { useEffect, useState } from "react";

//Images
const images = [
  {
    id: "image1",
    webpSrc:
      "https://ik.imagekit.io/z4j9hui79/closeup-professional-carpenter-hold-electric-circu-2024-01-04-21-15-19-utc.webp?updatedAt=1740893226262",
    fallbackSrc:
      "https://ik.imagekit.io/z4j9hui79/closeup-professional-carpenter-hold-electric-circu-2024-01-04-21-15-19-utc.jpg?updatedAt=1740893842030",
  },
  {
    id: "image2",
    webpSrc:
      "https://ik.imagekit.io/z4j9hui79/happy-couple-carrying-furniture-into-their-new-apa-2023-11-27-05-33-12-utc.webp?updatedAt=1740894039454",
    fallbackSrc:
      "https://ik.imagekit.io/z4j9hui79/happy-couple-carrying-furniture-into-their-new-apa-2023-11-27-05-33-12-utc.jpg?updatedAt=1740893430484",
  },
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <ResponsiveImage
            key={image.id}
            webpSrc={image.webpSrc}
            fallbackSrc={image.fallbackSrc}
            width={"100%"}
            height={"auto"}
            alt={`Image with ID ${image.id}`}
            className="slider-image"
            lazyLoading={false}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
