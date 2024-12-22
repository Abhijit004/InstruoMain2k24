import "./Sponsorship.css";
import Carousel from "/src/components/Carousel/Carousel";

const contacts = [
  { name: "Person 1", role: "Chairperson" },
  { name: "Person 2", role: "Joint Convenor" },
  { name: "Person 3", role: "Joint Convenor" },
  { name: "Person 4", role: "Treasurer" },
  { name: "Person 5", contact: "+91 95552 09179" },
  { name: "Person 6", contact: "+91 78909 38525" },
  { name: "Person 7", contact: "+91 84204 74705" },
];

const Sponsorship = () => {
  return (
    <div className="sponsors-container flex-center">
      <img
        src="/assets/Sponsor/Ellipse 8.svg"
        className="ellipse ellipse-1"
        alt=""
      />
      <img
        src="/assets/Sponsor/Ellipse 9.svg"
        className="ellipse ellipse-2"
        alt=""
      />
      <img
        src="/assets/Sponsor/Ellipse 10.svg"
        className="ellipse ellipse-3"
        alt=""
      />

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

      <div className="sponsors-secondary flex-center">
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

      <div className="carousel-container flex-center">
        <img
          src="/assets/Sponsor/Footer-lamp.png"
          alt=""
          className="sponsor-lamp"
        />
        <h1 className="sponsors-title">Past Sponsors</h1>
        <Carousel />
      </div>

      <div className="sponsors-cta flex-center">
        <h1 className="sponsors-title">Connect With Us</h1>

        <div className="contacts">
          <div className="contact-grid">
            {contacts.map((contact, index) => (
              <div className="contact-card" key={index}>
                <h1>{contact.name}</h1>
                {contact.role ? (
                  <div className="role">{contact.role}</div>
                ) : (
                  <div className="contact-info">
                    <img
                      src="https://img.icons8.com/material-outlined/24/ffffff/phone.png"
                      alt="Phone"
                    />
                    <span>{contact.contact}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // {/* <textarea name="textv classNameName="text-area"></textarea> */}
  );
};

export default Sponsorship;
