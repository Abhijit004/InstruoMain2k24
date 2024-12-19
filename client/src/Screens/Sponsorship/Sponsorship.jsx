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

      <div className="sponsors-cta">
        <h1 className="sponsors-title">Connect With Us</h1>

        <div className="contacts">
          <div className="contact-grid">
            <div className="contact-card">
              <div>Person 1</div>
              <div className="role">Chairperson</div>
            </div>
            <div className="contact-card">
              <div>Person 2</div>
              <div className="role">Joint Convenor</div>
            </div>
            <div className="contact-card">
              <div>Person 3</div>
              <div className="role">Joint Convenor</div>
            </div>
            <div className="contact-card">
              <div>Person 4</div>
              <div className="role">Treasurer</div>
            </div>
            <div className="contact-card">
              <div>Person 5</div>
              <div className="contact-info">
                <img
                  src="https://img.icons8.com/material-outlined/24/ffffff/phone.png"
                  alt="Phone"
                />
                <span>+91 95552 09179</span>
              </div>
            </div>
            <div className="contact-card">
              <div>Person 6</div>
              <div className="contact-info">
                <img
                  src="https://img.icons8.com/material-outlined/24/ffffff/phone.png"
                  alt="Phone"
                />
                <span>+91 78909 38525</span>
              </div>
            </div>
            <div className="contact-card">
              <div>Person 7</div>
              <div className="contact-info">
                <img
                  src="https://img.icons8.com/material-outlined/24/ffffff/phone.png"
                  alt="Phone"
                />
                <span>+91 84204 74705</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <textarea name="textv classNameName="text-area"></textarea> */}
    </div>
  );
};

export default Sponsorship;
