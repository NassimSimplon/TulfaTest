import "./ManualSlider.css";
import React, { useEffect, useState } from "react";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";
import useImageSlider from "../../CustomHooks/useImageSlider";

//Sofas Images
const images = [
  "https://i.postimg.cc/Zn7bdK9g/blue-sofa.png",
  "https://i.postimg.cc/cC41C8Jw/grey-sofa.png",
  "https://i.postimg.cc/Pr7ffJnv/violet-sofa.png",
];
const imagesWebp = [
  "https://i.postimg.cc/xCPT9P99/blue-sofa.webp",
  "https://i.postimg.cc/Y97CcPKX/grey-sofa.webp",
  "https://i.postimg.cc/WbzbPrCP/violet-sofa.webp",
];
const ManualSlider = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const { currentIndex, goToImage } = useImageSlider(images);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [currentIndex]);

  return (
    <div className="manualSlider-container">
      <div className="image-manualSlider">
        <ResponsiveImage
          webpSrc={imagesWebp[currentIndex]}
          key={`sofas-s${animationKey}s`}
          fallbackSrc={images[currentIndex]}
          alt={`Sofas image ${currentIndex + 1}`}
          width={"100%"}
          height={"100%"}
          className="slider-image"
          lazyLoading={false}
        />
      </div>
      <div className="button-container">
        <button type="button" onClick={() => goToImage(0)} />
        <button type="button" onClick={() => goToImage(1)} />
        <button type="button" onClick={() => goToImage(2)} />
      </div>
    </div>
  );
};

export default ManualSlider;
