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
                    src={'videos/banner.webm'} 
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
