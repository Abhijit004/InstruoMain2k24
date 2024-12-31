import React from "react";
import "./EventsHero.css";
import Mesh from "../../components/Mesh/Mesh";
import { DownOutlined } from "@ant-design/icons";

const EventsHero = () => {
  return (
    <div className="events-hero">
      <img className="pink-laser" src="/assets/pink-laser.webp" />
      <img className="skyblue-laser" src="/assets/skyblue-laser.webp" />
      <img className="ellipse-1" src="/assets/left-ellipse.webp" />

      <img className="ellipse-2" src="/assets/right-ellipse.webp" />

      <div className="hero-title gradient-color">Events</div>
      <div className="byline">
        Step into the heartbeat of Instruo—our events are crafted to captivate,
        inspire, and challenge you to reach new heights. Whether you&apos;re
        here to compete, learn, or simply be amazed, there&apos;s something
        extraordinary waiting for you. Dive in and make every second count!
      </div>
      <DownOutlined
        style={{
          fontSize: "2rem",
          paddingTop: "1rem",
          animation: "bounce-down 3s ease infinite",
          animationDelay: 5,
          transition: "all ease 0.5s",
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      />
      <Mesh />
    </div>
  );
};

export default EventsHero;
