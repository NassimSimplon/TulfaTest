import "./VideoSection.css";
import PropTypes from "prop-types";
import React, { memo } from "react";
import VideoPlayer from "../../ReUsableComponents/VideoPlayer/VideoPlayer";

const VideoSection = ({handleError, handleLoadedData}) => {
    return (
        <section className='VideoSection'>
            <div className="video-background">
                <VideoPlayer 
                handleError={handleError} handleLoadedData={handleLoadedData}
                    src={'https://media-hosting.imagekit.io//20641990a5494ae6/banner.webm?Expires=1835617345&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tMeC1AfIQANffLeBaUGjIfeU8yXdUiUTNfT39OefMu1jFqZ2fU7hxoo5pqBKSIGDB1H7x3MgqbyMnSF~gJrYPSkeWh0qQuyF-N9lyNOCMLOsA1oMUiJH9C9I78z4XdKklIgnTW3EVQRptcTeDv3gx72eUcTAwsPE5g5~O9~3uTLLp0bL3top39V5EQzvEFLUWQMqt1HDtTE20qFC1fSROLWGj1hV2MRrh5VldcsFek~ki6P9rIFaE0PUQIMwyha4Pua9hXRQzp6BEVqq8WEy0gxeoXDepkh0Px~aCCscphGV2M~kOsOgmxLwpxfKfGFcT9MCfNRTiWs23W59GKCF8Q__'} 
                    muted 
                    type="video/webm"
                    autoPlay
                    loop
                    playsInline
                />
            </div>
        </section>
    );
};

VideoSection.propTypes = {
  handleLoadedData:PropTypes.func,
  handleError:PropTypes.func
};

export default memo(VideoSection);
