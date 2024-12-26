import { useEffect, useRef } from "react";
import "./Carousel.css";

const sponsors1 = [
  {
    name: "Sears Holdings India",
    logo: "/public/assets/Sponsor/sears.webp",
  },
  {
    name: "Sears Deep Learning Centre",
    logo: "/public/assets/Sponsor/Sears-deep-learning.webp",
  },
  {
    name: "Coding Ninjas",
    logo: "/public/assets/Sponsor/coding-ninjas.webp",
  },
  {
    name: "T.I.M.E",
    logo: "/public/assets/Sponsor/time-logo.webp",
  },
  // {
  //   name: "Erudite",
  //   logo: "/public/assets/Sponsor/Erudite.webp",
  // },
  // {
  //   name: "Roasted Cart",
  //   logo: "/public/assets/Sponsor/Roasted Cart.webp",
  // },
];

const sponsors2 = [
  {
    name: "Erudite",
    logo: "/public/assets/Sponsor/Erudite.webp",
  },
  {
    name: "Roasted Cart",
    logo: "/public/assets/Sponsor/Roasted Cart.webp",
  },
  {
    name: "DTS",
    logo: "/public/assets/Sponsor/DTS.webp",
  },
  {
    name: "IIC",
    logo: "/public/assets/Sponsor/iic.webp",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 0.6;
        }
      }, 150);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    startScroll();
    carousel.addEventListener("mouseenter", stopScroll);
    carousel.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      carousel.removeEventListener("mouseenter", stopScroll);
      carousel.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <>
      <div ref={carouselRef} className="sponsors-carousel">
        <div className="sponsors-track">
          {[...sponsors1, ...sponsors1].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="sponsor-card flex-center"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="sponsor-logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/150?text=Logo+Not+Found";
                }}
              />
            </div>
          ))}
        </div>
        <div className="sponsors-track">
          {[...sponsors2, ...sponsors2].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="sponsor-card flex-center"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="sponsor-logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/150?text=Logo+Not+Found";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
