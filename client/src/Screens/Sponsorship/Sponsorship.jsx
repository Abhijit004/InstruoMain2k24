import "./Sponsorship.css";
import Carousel from "/src/components/Carousel/Carousel";

const Sponsorship = () => {
  return (
    <div className="sponsors-container">
      <img src="/assets/Sponsor/Ellipse 8.svg" className="ellipse-1" alt="" />
      <img src="/assets/Sponsor/Ellipse 9.svg" className="ellipse-2" alt="" />
      <img src="/assets/Sponsor/Ellipse 10.svg" className="ellipse-3" alt="" />
      <h1 className="sponsors-title main-title">Sponsor Us</h1>
      <p className="main-para">
        Step into Kolkata's ultimate tech extravaganza! Dive into innovation,
        challenge your limits in thrilling competitions, and get hands-on with
        transformative workshops. Ignite your ideas and be the spark that
        revolutionizes the future!
      </p>
      <a href="#" className="btn">
        Download Brochure
      </a>
      <div className="events">
        <h1 className="sponsors-title">Why Sponsor Us ?</h1>
        <p className="sponsor-para">
          Sponsoring our college fest is a wonderful opportunity to connect with
          a vibrant and enthusiastic audience while supporting a celebration of
          creativity, talent, and innovation. Your partnership will not only
          enhance the event’s success but also leave a lasting impression on the
          next generation of changemakers.
        </p>
        <div className="btn-group">
          <a href="#" className="btn">
            Read More About Us
          </a>
          <a href="#" className="btn">
            Download our Brochure
          </a>
        </div>
      </div>

      <img
        src="/assets/Sponsor/Footer-lamp.png"
        alt=""
        className="footer-lamp"
      />
      <h1 className="sponsors-title">Past Sponsors</h1>

      {/* Carousel Component */}
      <Carousel />

      {/* <img src="/assets/Footer-lamp.png" alt="" className="footer-lamp" /> */}

      <div className="sponsors-cta">
        <h1 className="sponsors-title">Connect With Us</h1>
        <p>
          Drop an Email and let us collaborate on the awesome journey together{" "}
          <br />
          for the better good!
        </p>
        <textarea name="text" className="text-area"></textarea>
      </div>
    </div>
  );
};

export default Sponsorship;
