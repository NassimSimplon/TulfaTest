import "./App.css";
import AnimLogo from "./assets/AnimLogo";
import LazyLoader from "./HOC/LazyLoader";
import Navbar from "./Shared/navbar";
import { useCallback, useState } from "react";

// Lazy load Components
const Main = LazyLoader(() => import("./Layouts/Main"));

function App() {
  //this Code to check if the of the FIrst Section loaded successfully or not
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadedData = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsVideoLoaded(false);
  }, []);
  return (
    <>
      {!isVideoLoaded && (
        <div className="loader">
          {hasError ? (
            <div className="error-message">
              <p>Error loading Please refresh the Page.</p>
            </div>
          ) : (
            <div className="logo-box">
              <AnimLogo />
            </div>
          )}
        </div>
      )}

      <Navbar />
      <Main handleError={handleError} handleLoadedData={handleLoadedData} />
    </>
  );
}

export default App;
