import "./App.css";
import AnimLogo from "./assets/AnimLogo";
import LazyLoader from "./HOC/LazyLoader";
import Navbar from "./Shared/navbar";
import { useEffect, useState } from "react";

// Lazy load Components
const Main = LazyLoader(() => import("./Layouts/Main"));

function App() {
  //States
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // i done it this way because there is not dynamic data or Api to point on it
  useEffect(() => {
    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {!isVideoLoaded && (
        <div className="loader">
          <div className="logo-box">
            <AnimLogo />
          </div>
        </div>
      )}
      <Navbar />
      <Main />
    </>
  );
}

export default App;
