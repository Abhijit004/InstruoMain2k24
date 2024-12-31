"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import "./parallaxscroll.css";
export function ParallaxScroller() {
  return (
    <>
      <div className="parallax-heading">Previous Editions</div>
      <ParallaxScroll images={images} />
    </>
  );
}

const images = [
  "assets/Gallery/1.webp",
  "assets/Gallery/2.webp",
  "assets/Gallery/3.webp",
  "assets/Gallery/4.webp",
  "assets/Gallery/5.webp",
  "assets/Gallery/6.webp",
  "assets/Gallery/7.webp",
  "assets/Gallery/10.webp",
  "assets/Gallery/11.webp",
  "assets/Gallery/13.webp",
  "assets/Gallery/14.webp",
  "assets/Gallery/15.webp",
  "assets/Gallery/16.webp",
  "assets/Gallery/17.webp",
  "assets/Gallery/18.webp",
];
