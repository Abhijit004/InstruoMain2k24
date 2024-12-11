import "./Sponsorship.css";
import Carousel from "/src/components/Carousel/Carousel";

const Sponsorship = () => {
  return (
    <div className="sponsors-container">
      <img src="/assets/Main-lamp.png" alt="" className="main-lamp" />
      <h1 className="sponsors-title">Some other text</h1>

      <div className="events">
        <h1 className="eventHeading">Events</h1>
      </div>

      <h1 className="sponsors-title">Past Sponsors</h1>

      {/* Carousel Component */}
      <Carousel />

      <img src="/assets/Footer-lamp.png" alt="" className="footer-lamp" />

      <div className="sponsors-cta">
        <h1 className="sponsors-title">Connect with us</h1>
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
