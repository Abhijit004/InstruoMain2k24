import { useEffect, useState } from "react";
import Hype from "./Hype";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import "./Home.css";
import PreviousEditions from "./PreviousEditions";
import { ParallaxScroller } from "../../components/Parallax Scroll/ParallaxScroll";

const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 900);

  // Update screen size dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="instruo-home"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Hero />
      <Hype />
      <AboutUs />
      <ParallaxScroller /> */}
      {/* {isLargeScreen ? <PreviousEditions /> : <ParallaxScroller />} */}
    </section>
  );
};

export default Home;
