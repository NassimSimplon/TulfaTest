import "./CustomizedSofas.css";
import ColorOption from "../ColorOption";
import ManualSlider from "../ManualSlider";
import ZoomImageComponent from "../ZoomImageComponent";
import useImageSlider from "../../CustomHooks/useImageSlider";
import useScrollTrigger from "../../CustomHooks/useScrollTrigger";
import { useCallback } from "react";

const bigSofasWebp = [
  "https://i.postimg.cc/MTxfW3dt/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom.webp",
  "https://i.postimg.cc/Px4pNb7H/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom.webp",
  "https://i.postimg.cc/ZnsWxbZD/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom.webp",
];

const bigSofas = [
  "https://i.postimg.cc/GpnHQSwr/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom.png",
  "https://i.postimg.cc/jd9WWSMD/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom.png",
  "https://i.postimg.cc/6QVT1LtZ/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom.png",
];

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

const CustomizedSofas = () => {
  const customSofa = useScrollTrigger(0.3);
  const { currentIndex, goToImage } = useImageSlider(bigSofasWebp);
  const { currentIndex: currentIndexSmallSofa, goToImage: goToSmallImage } =
    useImageSlider(imagesWebp);

  // This is to prevent unnecessary re-renders
  const handleSmallImageChange = useCallback(
    (index) => goToSmallImage(index),
    [goToSmallImage]
  );

  return (
    <section className="CustomizedSofas" ref={customSofa.ref}>
      <h1
        className={
          customSofa.isInView ? "CustomizedSofas-title" : "hideAnimation"
        }
      >
        Customize your furniture
      </h1>
      {/* Big Sofas Section */}
      <div className="big-sofas-container">
        <div className="manual-slider-container">
          <div
            className={
              customSofa.isInView ? "slider-manual-box" : "hideAnimation"
            }
          >
            <ManualSlider
              images={bigSofas}
              imagesWebp={bigSofasWebp}
              goToImage={goToImage}
              currentIndex={currentIndex}
              showButtons={true}
            />
          </div>
        </div>
        <div className="zoom-image-block">
          <ZoomImageComponent
            key={bigSofas[currentIndex]}
            className="zoom-container"
            height="100%"
            width="100%"
            src={bigSofas}
            webSrc={bigSofasWebp}
            zoomScale={4}
            transitionTime={0.2}
            currentIndex={currentIndex}
          />
        </div>
      </div>

      {/* Small Sofas Section */}
      <div className="big-sofas-container">
        <div className="zoom-image-block">
          <ZoomImageComponent
            key={images[currentIndexSmallSofa]}
            className="zoom-container"
            height="100%"
            width="100%"
            src={images}
            webSrc={imagesWebp}
            zoomScale={5}
            transitionTime={0.2}
            currentIndex={currentIndexSmallSofa}
          />{" "}
        </div>
        <div className="manual-slider-container">
          <div
            className={
              customSofa.isInView ? "slider-manual-box" : "hideAnimation"
            }
          >
            <ManualSlider
              images={images}
              imagesWebp={imagesWebp}
              goToImage={goToSmallImage}
              currentIndex={currentIndexSmallSofa}
              showButtons={false}
            />
          </div>
        </div>

        {/* Color Options */}
        <div className="color-section">
          <ColorOption
            label="Prints"
            index={0}
            onClick={handleSmallImageChange}
          />
          <ColorOption
            label="Leathers"
            index={1}
            onClick={handleSmallImageChange}
          />
          <ColorOption
            label="Embroidery"
            index={2}
            onClick={handleSmallImageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomizedSofas;
