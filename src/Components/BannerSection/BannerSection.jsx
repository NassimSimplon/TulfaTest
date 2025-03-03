import "./BannerSection.css";
import ResponsiveImage from "../../ReUsableComponents/ResponsiveImage";
import useScrollTrigger from "../../CustomHooks/useScrollTrigger";

const BannerSection = () => {
  const banner = useScrollTrigger(0.4);
  return (
    <section className="banner" ref={banner.ref}>
      <div className="text-block" >
        <div className={`  ${banner.isInView ? "title-box" : "hideAnimation"}`}>
          <h1
            className="banner-text"
          >
            Welcome to Tufla
          </h1>{" "}
        </div>
      </div>
      <div
        className={`  ${banner.isInView ? "responsive-image-box" : "hideAnimation"
          }`}
      >
        <ResponsiveImage
          webpSrc={
            "https://i.postimg.cc/y6Qsnxdp/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc.webp"
          }
          fallbackSrc={
            "https://i.postimg.cc/SR304XYy/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc.png"
          }
          alt="Green Sofa"
          width={"auto"}
          height={"auto"}
          className="banner-image"
          lazyLoading={false}
        />
      </div>
    </section>
  );
};

export default BannerSection;
