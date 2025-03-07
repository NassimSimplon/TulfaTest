import "./App.css";
import AnimLogo from "./assets/AnimLogo";
import LazyLoader from "./HOC/LazyLoader";
import Navbar from "./Shared/navbar";
import { useCallback, useEffect, useRef, useState } from "react";

// Lazy load Components
const Main = LazyLoader(() => import("./Layouts/Main"));


function App() {
  //Ref
  const videoRef = useRef(null);
  //States
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMainLoaded, setIsMainLoaded] = useState(false);
  const handleLoadedMain = useCallback(() => {
    setIsMainLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsVideoLoaded(false);
  }, []);

  //this is to check it the Main is Loaded successfully then check in the video is loaded
  useEffect(() => {
    if (!isMainLoaded) return;
    const video = videoRef.current;
    if (!video) return;
    setIsVideoLoaded(true);
  }, [isMainLoaded, videoRef]);

  return (
    <>
      {!isVideoLoaded && (
        <div className="loader">
          {hasError ? (
            <div className="error-message">
              <p>Error loading. Please refresh the page.</p>
            </div>
          ) : (
            <div className="logo-box">
              <AnimLogo />
            </div>
          )}
        </div>
      )}
      <Navbar />
      <Main
        videoRef={videoRef}
        handleLoadedMain={handleLoadedMain}
        handleError={handleError}
      />
    </>
  );
}

export default App;
