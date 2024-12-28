import React from "react";
import Hype from "./Hype";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import "./Home.css";
// import PreviousEditions from "./PreviousEditions";
// import { ParallaxScroller } from "../../components/Parallax Scroll/ParallaxScroll";

const Home = () => {
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
      {/* <PreviousEditions /> */}
      {/* <ParallaxScroller /> */}
    </section>
  );
};

export default Home;
