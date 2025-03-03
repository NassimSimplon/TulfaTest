import "./navbar.css";
import TuflaColorFulIcon from "../../assets/tuflaColorfulIcon";
import TuflaIcon from "../../assets/tuflaIcon";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling with debouncing for performance
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Derived class for navbar scrolling state
  const navbarClass = `navbar ${scrolled ? "scrolled" : ""}`;

  return (
    <header>
      <nav className={navbarClass}>
        {/* Logo */}
        <div aria-label="Tufla Logo">
          {scrolled ? <TuflaColorFulIcon /> : <TuflaIcon />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
