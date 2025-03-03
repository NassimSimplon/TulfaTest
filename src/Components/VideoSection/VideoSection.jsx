import "./VideoSection.css";
import React from "react";
import VideoPlayer from "../../ReUsableComponents/VideoPlayer/VideoPlayer";

const VideoSection = () => {
    return (
        <section className='VideoSection'>
            <div className="video-background">
                <VideoPlayer 
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

export default VideoSection;
