import "./App.css";
import AnimLogo from "./assets/AnimLogo";
import LazyLoader from "./HOC/LazyLoader";
import Navbar from "./Shared/navbar";
import { Fragment, useEffect, useState } from "react";

//Lazy load Components
const Main = LazyLoader(() => import("./Layouts/Main"));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {!isLoaded && (
        <div className="loader">
          <div className="logo-box">
            <AnimLogo />
          </div>
        </div>
      )}
      <Navbar />
      <Main />
    </Fragment>
  );
}

export default App;
