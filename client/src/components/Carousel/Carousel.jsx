import { useEffect, useRef } from "react";
import "./Carousel.css";

const sponsors1 = [
  {
    name: "Wow Momo",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwoXUAbNVCz_aJk7dsfZieHPJDojdUHS9ww&s",
  },
  // {
  //   name: "Coding Ninjas",
  //   logo: "https://www.financialexpress.com/wp-content/uploads/2023/05/APIS-and-NxtWave-image-37-3.jpg?w=1024",
  // },
  {
    name: "T.I.M.E",
    logo: "https://www.time4education.com/landingpage_enquiry/kerala/kollam/images/time-logo.png",
  },
  {
    name: "Amul",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwoXUAbNVCz_aJk7dsfZieHPJDojdUHS9ww&s",
  },
  {
    name: "Bisleri",
    logo: "https://logowik.com/content/uploads/images/bisleri-old5714.logowik.com.webp",
  },
  {
    name: "CESC",
    logo: "https://portfolio.investmentguruindia.com/investmentguruimages/upload/post/2021/11/4e47ac92d024d9c4dbb4b2dee7391924.jpg",
  },
  {
    name: "Coal",
    logo: "https://sundayguardianlive.com/wp-content/uploads/2019/08/gover-mull.jpg",
  },
  {
    name: "Friend's Pizza",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfiMqr2jO_LbJs5MNdQ6kqOIyV81vl4vNiA&s",
  },
  {
    name: "NTD",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlpaY1jca-N2kk6-u92kApgql4YafPdNJRg&s",
  },
  {
    name: "Jeena",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuu_ZnuYldp2nMPi6ou9T1cjvM5NcJK3ygpA&s",
  },
];

const sponsors2 = [
  {
    name: "Erudite",
    logo: "https://scontent.flko11-1.fna.fbcdn.net/v/t39.30808-1/327372402_838904940505326_7279513430953464863_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=DTztaXeJpzYQ7kNvgHSS4_R&_nc_zt=24&_nc_ht=scontent.flko11-1.fna&_nc_gid=Ah3adRywIMLPmHbVD9JCbM3&oh=00_AYDB3do4w63tHu5vl3ZGZmjSCvXhNBZWzg_8RNXC4q_reA&oe=67738F17",
  },
  // {
  //   name: "Roasted Cart",
  //   logo: "https://scontent.flko11-1.fna.fbcdn.net/v/t39.30808-6/292564617_464861085639686_3011550964506932231_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=frHE8c7hJGgQ7kNvgGbpltU&_nc_zt=23&_nc_ht=scontent.flko11-1.fna&_nc_gid=AemH2MmzqyPFYujSh4QQjP4&oh=00_AYDUoSPAJhHeUKgKDaBvZ-_7fDohzipomkWNhPEbA1ZWcA&oe=677385DA",
  // },
  // {
  //   name: "DTS",
  //   logo: "https://instruo-web-app.vercel.app/assets/DTS.a02168ad.jpeg",
  // // },
  // {
  //   name: "IIC",
  //   logo: "https://instruo-web-app.vercel.app/assets/iic.b9b75d82.png",
  // },
  {
    name: "B Natural",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSit_yszokDt_uA1cFdfHxVcgdX_UfLSbcwZg&s",
  },
  {
    name: "Cafe Coffee Day",
    logo: "https://cdn.worldvectorlogo.com/logos/cafe-coffee-day.svg",
  },
  {
    name: "Loreal Paris",
    logo: "https://i.pinimg.com/originals/3d/47/17/3d4717a390e0331b8fe70dedba54df62.jpg",
  },
  {
    name: "Barista",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Barista_Lavazza_logo.svg",
  },
  {
    name: "Gate Forum",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTOYNGMHh696IMusxb3fif2CPVhmfhaj3bg&s",
  },
  {
    name: "Fleapo",
    logo: "https://media.licdn.com/dms/image/v2/C5116AQEpuLLHqqdR8w/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1575547303342?e=2147483647&v=beta&t=3cr6C4-_fIHz_Us6kINvWHskZYYBBMkAzlbdtVGokjY",
  },
  {
    name: "Red FM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWS1-eacFW67u42nkWOdvWQMZMMPJ7yr_w0g&s",
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
